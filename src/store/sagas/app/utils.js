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

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export {getParams, capitalizeFirstLetter};
