const myRequest = async (url: string, option: {}) => {
	try {
		const response = await fetch(url, option);
		// if (response.status !== 200) {
		// 	return { status: 'ERROR', value: response.status };
		// }
		if (response === undefined) {
			return { status: 'ERROR', value: 'ошибка сети' };
		};
		const json = await response.json();
		return json;
	} catch (error) {
		return { status: 'ERROR', value: error };
	};
};

const getInfo = async () => {
	const myHeaders = new Headers();
	myHeaders.append("accept", "application/json");
	myHeaders.append("AccessKey", "891cf53c-01fc-4d74-a14c-592668b7a03c");
	myHeaders.append("Content-Type", "application/json-patch+json");

	const raw = JSON.stringify({
		"idClient": "2c44d8c2-c89a-472e-aab3-9a8a29142315",
		"accessToken": "",
		"paramName": "device",
		"paramValue": "7db72635-fd0a-46b9-813b-1627e3aa02ea",
		"latitude": 0,
		"longitude": 0,
		"sourceQuery": 0
	});

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const res = await myRequest("http://84.201.188.117:5021/api/v3/clients/accesstoken", requestOptions)

	const url = 'http://84.201.188.117:5003/api/v3/ibonus/generalinfo/' + res.accessToken

	const newMyHeaders = new Headers();
	newMyHeaders.append("accept", "application/json");
	newMyHeaders.append("AccessKey", "891cf53c-01fc-4d74-a14c-592668b7a03c");

	const newRequestOptions = {
		method: 'GET',
		headers: newMyHeaders,
		redirect: 'follow'
	};

	const info = await myRequest(url, newRequestOptions)
	return info.data
}

export default getInfo

