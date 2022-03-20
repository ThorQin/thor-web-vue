// eslint-disable-next-line @typescript-eslint/no-var-requires
const { v1 } = require('uuid');

function generateKey() {
	const id = v1().replace(/-/g, '');
	const buffer = Buffer.from(id, 'hex');
	const key = buffer.toString('base64');
	return key;
}

console.log('Generated key:', generateKey());
