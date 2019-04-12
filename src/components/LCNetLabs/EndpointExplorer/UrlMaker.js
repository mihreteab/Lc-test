export default (obj, param1 = '', dynamicParam = undefined, param2 = '') => {
	let url = `${process.env.REACT_APP_API_URL}/labs${param1}/${
		dynamicParam !== undefined ? obj[dynamicParam] || `{${dynamicParam}}` : ''
	}${param2}?`;
	Object.keys(obj).forEach(key => {
		if (obj[key] !== '' && key !== dynamicParam) {
			url += `${key}=${obj[key]}&`;
		}
	});
	return url.substring(0, url.length - 1);
};
