import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { loadFixture } from './test-utils.js';

describe('Integration server setup', () => {
	/** @type {import('./test-utils.js').DevServer} */
	let devServer;
	/** @type {import('./test-utils.js').Fixture} */
	let fixture;

	before(async () => {
		fixture = await loadFixture({ root: './fixtures/integration-server-setup/' });
		devServer = await fixture.startDevServer();
	});

	after(async () => {
		await devServer.stop();
	});

	it('Adds middlewares in dev', async () => {
		const res = await fixture.fetch('/');

		assert.equal(res.headers.get('x-middleware'), 'true');
	});
});
