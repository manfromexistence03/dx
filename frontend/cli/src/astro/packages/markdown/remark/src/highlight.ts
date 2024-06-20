import type { Element, Parent, Root } from 'hast';
import { fromHtml } from 'hast-util-from-html';
import { toText } from 'hast-util-to-text';
import { removePosition } from 'unist-util-remove-position';
import { visitParents } from 'unist-util-visit-parents';

type Highlighter = (code: string, language: string, options?: { meta?: string }) => Promise<string>;

const languagePattern = /\blanguage-(\S+)\b/;

/**
 * A hast utility to syntax highlight code blocks with a given syntax highlighter.
 *
 * @param tree
 *   The hast tree in which to syntax highlight code blocks.
 * @param highlighter
 *   A fnction which receives the code and language, and returns the HTML of a syntax
 *   highlighted `<pre>` element.
 */
export async function highlightCodeBlocks(tree: Root, highlighter: Highlighter) {
	const nodes: Array<{
		node: Element;
		language: string;
		parent: Element;
		grandParent: Parent;
	}> = [];

	// We’re looking for `<code>` elements
	visitParents(tree, { type: 'element', tagName: 'code' }, (node, ancestors) => {
		const parent = ancestors.at(-1);

		// Whose parent is a `<pre>`.
		if (parent?.type !== 'element' || parent.tagName !== 'pre') {
			return;
		}

		// Where the `<code>` is the only child.
		if (parent.children.length !== 1) {
			return;
		}

		// And the `<code>` has a class name that starts with `language-`.
		let languageMatch: RegExpMatchArray | null | undefined;
		let { className } = node.properties;
		if (typeof className === 'string') {
			languageMatch = className.match(languagePattern);
		} else if (Array.isArray(className)) {
			for (const cls of className) {
				if (typeof cls !== 'string') {
					continue;
				}

				languageMatch = cls.match(languagePattern);
				if (languageMatch) {
					break;
				}
			}
		}

		// Don’t mighlight math code blocks.
		if (languageMatch?.[1] === 'math') {
			return;
		}

		nodes.push({
			node,
			language: languageMatch?.[1] || 'plaintext',
			parent,
			grandParent: ancestors.at(-2)!,
		});
	});

	for (const { node, language, grandParent, parent } of nodes) {
		const meta = (node.data as any)?.meta ?? node.properties.metastring ?? undefined;
		const code = toText(node, { whitespace: 'pre' });
		// TODO: In Astro 5, have `highlighter()` return hast directly to skip expensive HTML parsing and serialization.
		const html = await highlighter(code, language, { meta });
		// The replacement returns a root node with 1 child, the `<pr>` element replacement.
		const replacement = fromHtml(html, { fragment: true }).children[0] as Element;
		// We just generated this node, so any positional information is invalid.
		removePosition(replacement);

		// We replace the parent in its parent with the new `<pre>` element.
		const index = grandParent.children.indexOf(parent);
		grandParent.children[index] = replacement;
	}
}
