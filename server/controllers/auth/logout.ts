import { DefaultContext } from 'thor-web/dist/types';

export async function get(ctx: DefaultContext): Promise<void> {
	ctx.session.clear();
}

get.title = '注销登录';
get.desc = '清除 session 信息，表示注销登录';
get.result = '无返回信息';
