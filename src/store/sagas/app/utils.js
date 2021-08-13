const getParams = (payload) => {
	const komunaQuery = payload?.komunat?.map((komuna) => `komuna=${komuna?.value}`).join("&");
	const vendbanimiQuery = payload?.vendbanimet
		?.map((vendbanimi) => `vendbanimi=${vendbanimi?.value}`)
		.join("&");
	const regjioniQuery = payload?.regjionet
		?.map((regjioni) => `regjioni=${regjioni?.value}`)
		.join("&");

	return {komunaQuery, vendbanimiQuery, regjioniQuery};
};

export {getParams};
