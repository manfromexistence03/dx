import { execaCommand } from 'execa';
import { markdownTable } from 'markdown-table';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { astroBin } from './_util.js';

/** @typedef {Record<string, import('../../packages/astro/src/core/config/timer.js').Stat>} AstroTimerStat */

/** Default project to run for this benchmark if not specified */
export const defaultProject = 'memory-default';

/**
 * @param {URL} projectDir
 * @param {URL} outputFile
 */
export async function run(projectDir, outputFile) {
	const root = fileURLToPath(projectDir);
	const outputFilePath = fileURLToPath(outputFile);

	console.log('Building and benchmarking...');
	await execaCommand(`node --expose-gc --max_old_space_size=256 ${astroBin} build`, {
		cwd: root,
		stdio: 'inherit',
		env: {
			ASTRO_TIMER_PATH: outputFilePath,
		},
	});

	console.log('Raw results written to', outputFilePath);

	console.log('Result preview:');
	console.log('='.repeat(10));
	console.log(`#### Memory\n\n`);
	console.log(printResult(JSON.parse(await fs.readFile(outputFilePath, 'utf-8'))));
	console.log('='.repeat(10));

	console.log('Done!');
}

/**
 * @param {AstroTimerStat} output
 */
function printResult(output) {
	return markdownTable(
		[
			['', 'Elapsed time (s)', 'Memory used (MB)', 'Final memory (MB)'],
			...Object.entries(output).map(([name, stat]) => [
				name,
				(stat.elapsedTime / 1000).toFixed(2),
				(stat.heapUsedChange / 1024 / 1024).toFixed(2),
				(stat.heapUsedTotal / 1024 / 1024).toFixed(2),
			]),
		],
		{
			align: ['l', 'r', 'r', 'r'],
		}
	);
}
