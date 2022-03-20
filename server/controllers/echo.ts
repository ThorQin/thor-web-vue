import os from 'os';
import { DefaultContext } from 'thor-web/dist/types';

export async function get(ctx: DefaultContext): Promise<void> {
	const info = {
		version: os.platform() + '-' + os.arch() + '(' + os.release() + ')',
		loadavg: os.loadavg(),
		totalmem: os.totalmem(),
		freemem: os.freemem(),
	};
	await ctx.sendJson(info);
}

get.title = '返回一些服务器信息';
