import {
	message
} from 'antd'
export default class Messager {
	success(content, duration) {
		message.success(content, duration);
	}

	info(content, duration) {
		message.info(content, duration);
	}
	error(content, duration) {
		message.error(content, duration);
	}
	loading(content, duration) {
		message.loading(content, duration);
	}
	warning(content, duration) {
		message.warning(content, duration);
	}

	config(option) {
		message.config(option)
	}
}