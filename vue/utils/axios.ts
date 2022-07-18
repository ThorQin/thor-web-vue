import { AxiosError } from 'axios';

export function getErrMsg(error: AxiosError): string {
	const { response } = error;
	let msg = '';
	if (response) {
		msg = response.status + ': ' + response.data;
	} else {
		msg = error.message;
	}
	return msg;
}
