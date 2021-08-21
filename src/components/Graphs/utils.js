import {groupBy} from "lodash";

const setIndustry = (filters, setShowGraph, showGraph) => {
	if (filters?.industria?.value) {
		setShowGraph(setKeyToTrue(showGraph, filters?.industria?.value));
	}
};

const setKeyToTrue = (object, key) => ({
	...Object.keys(object).reduce((result, k) => ({...result, [k]: false, [key]: true}), {}),
});

const showGraphInitialState = {
	UP: false,
	ATK: false,
	AKK: false,
	ARBK: false,
	AUV: false,
	MAPL: false,
	MASHT: false,
	MPBZhR: false,
	DOGANA: false,
};

const getDatasets = ({
	filters,
	items,
	property,
	singleItemLabel,
	isActiveNoActive = false,
	filterBy = null,
	isUp,
}) => {
	const {komunat, regjionet, vendbanimet} = filters;
	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) {
		return isActiveNoActive
			? [
					{
						label: "Aktiv",
						data: items?.map((item) => item.countaktiv),
						backgroundColor: "#00517D",
					},
					{
						label: "Joaktiv",
						data: items?.map((item) => item.countjoaktiv),
						backgroundColor: "#DDB40A",
					},
			  ]
			: [
					{
						label: singleItemLabel,
						data: items?.map((item) => item[property]),
						backgroundColor: colors[0],
					},
			  ];
	}
	if (vendbanimet.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "vendbanimiemri",
			property,
			filterBy,
			isUp,
		});
	}
	if (komunat.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "komunaemri",
			property,
			filterBy,
			isUp,
		});
	}
	if (regjionet.length > 0) {
		return generateDatasets({
			items,
			groupByLabel: "regjioniemri",
			property,
			filterBy,
			isUp,
		});
	}
};

const colors = {
	0: "#00517D",
	1: "#FCCB11",
	2: "#02BC77",
};

const generateDatasets = ({items, groupByLabel, property, filterBy, isUp = false}) => {
	const groupedItems = groupBy(items, groupByLabel);
	return Object.keys(groupedItems)?.map((key, index) => {
		let data;
		if (isUp) {
			const filteredItems = groupBy(groupedItems[key], filterBy);
			const array = Object.keys(filteredItems)?.map((x) => {
				let sum = 0;
				const tes = filteredItems[x]?.forEach((element) => {
					sum += Number(element[property]);
				});
				return sum;
			});
			data = array;
		} else {
			data = groupedItems[key]?.map((item) => item[property]);
		}

		return {
			label: key,
			data,
			backgroundColor: colors[index],
		};
	});
};

export {setIndustry, showGraphInitialState, getDatasets};
