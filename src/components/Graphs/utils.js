import _, {groupBy} from "lodash";

const setIndustry = (filters, setShowGraph, showGraph) => {
	if (filters?.industria?.value) {
		setShowGraph(setKeyToTrue(showGraph, filters?.industria?.value));
	}
};

const setKeyToTrue = (object, key) => ({
	...Object.keys(object).reduce((result, k) => ({...result, [k]: false, [key]: true}), {}),
});

const areFiltersEmpty = (filters) => {
	const {regjionet, komunat, vendbanimet} = filters;
	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) return true;
	return false;
};

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

const generateDatasets = ({items, groupByLabel, property, filterBy = null}) => {
	const groupedItems = groupBy(items, groupByLabel);
	const labels = Object.keys(groupBy(items, filterBy));

	return Object.keys(groupedItems)?.map((key, index) => {
		let data = null;
		if (filterBy) {
			data = labels?.map((item) => {
				const filtered = groupedItems[key].filter((x) => {
					// eslint-disable-next-line eqeqeq
					if (x[filterBy] == item) return true;
					return false;
				});
				return filtered.map((y) => y[property])?.reduce((a, b) => Number(a) + Number(b), 0);
			});
		}

		return {
			label: key,
			data: filterBy ? data : groupedItems[key]?.map((item) => item[property]),
			backgroundColor: colors[index],
		};
	});
};

export {setIndustry, showGraphInitialState, getDatasets, areFiltersEmpty};
