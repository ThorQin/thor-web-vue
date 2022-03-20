import { desc, min, need, object, prop, Schema, string } from 'thor-validation';
import { HttpError } from 'thor-web';
import { DefaultContext } from 'thor-web/dist/types';

const LoginSchema = new Schema(
	need(
		object(prop('account', desc('账号'), need(string(min(1)))), prop('password', desc('密码'), need(string(min(1)))))
	)
);

interface LoginQuery {
	account: string;
	password: string;
}

export async function post(ctx: DefaultContext): Promise<void> {
	const query = (await ctx.body.json(LoginSchema)) as LoginQuery;
	// should verify account and password by database or ldap etc..
	if (query.account === 'admin' && query.password === 'admin') {
		ctx.session.set('account', query.account);
	} else {
		throw new HttpError(401, 'Invalid account or password');
	}
}

post.body = LoginSchema.toJSON();
post.title = '登录';
post.desc = '调用登录接口：检查账号和密码是否合法，成功后把账号写入 Session，表示登录成功。';
post.result = '无返回值，仅仅设置 session 信息，如果失败会返回 Http 401 错误。';
