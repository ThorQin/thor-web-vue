import App from 'thor-web';
import { AccessHandlerParam } from 'thor-web/dist/types';

// public access dirs
const publicPath = new RegExp(
	[
		'^/api/auth/login$',
		'^/login/',
		'^/assets/(login\\.|modulepreload-polyfill\\.|vendor\\.|axios\\.)',
		'^/api-doc(/.+)?',
	]
		.map((r) => `(${r})`)
		.join('|')
);

App.start({
	controllerDir: './dist/controllers',
	controllerPath: '/api',
	apiDocPath: '/api-doc',
	serverKey: 'pR6psKhGEeyC4gV06fbEDA==', // May use 'npm run genkey' to obtain a new server key
	accessHandler: async (param: AccessHandlerParam) => {
		console.log(`access: ${param.method}: ${param.path}`);
		if (publicPath.test(param.path)) {
			return true;
		} else if (param.ctx.session?.get('account')) {
			return true;
		} else if (param.path === '/' || param.path === '/index.html') {
			return {
				action: 'redirect',
				url: '/login/',
			};
		} else {
			return false;
		}
	},
});
