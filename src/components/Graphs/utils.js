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

const areArraysEmpty = ({arrays}) => {
	const checkedArrays = arrays?.map((item) => item?.length === 0 || !item);
	return !checkedArrays?.some((item) => !item);
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
						data: filterBy
							? getFilteredItems({items, filterBy, property})
							: items?.map((item) => item[property]),
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

	return Object.keys(groupedItems)?.map((key, index) => {
		let data = null;
		if (filterBy) {
			data = getFilteredItems({items: groupedItems[key], filterBy, property});
		}

		return {
			label: key,
			data: filterBy ? data : groupedItems[key]?.map((item) => item[property]),
			backgroundColor: colors[index],
		};
	});
};

const getFilteredItems = ({items, filterBy, property}) => {
	const labels = Object.keys(groupBy(items, filterBy));

	return labels?.map((item) => {
		const filtered = items.filter((x) => {
			// eslint-disable-next-line eqeqeq
			if (x[filterBy] == item) return true;
			return false;
		});
		return filtered.map((y) => y[property])?.reduce((a, b) => Number(a) + Number(b), 0);
	});
};

const getGjiniaDataset = ({items, filters}) => {
	const {komunat, regjionet, vendbanimet} = filters;

	if (komunat?.length === 0 && regjionet?.length === 0 && vendbanimet?.length === 0) {
		return [
			{
				label: "",
				data: getGjiniaDataForDatasets(items),
			},
		];
	}

	if (vendbanimet?.length > 0) {
		const groupedItems = groupBy(items, "vendbanimiemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}

	if (komunat.length > 0) {
		const groupedItems = groupBy(items, "komunaemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}

	if (regjionet.length > 0) {
		const groupedItems = groupBy(items, "regjioniemri");
		return Object.keys(groupedItems)?.map((key) => ({
			label: key,
			data: getGjiniaDataForDatasets(groupedItems[key]),
		}));
	}
};

const getGjiniaDataForDatasets = (items) =>
	items?.reduce(
		({maxfemra, totalfemra, maxmeshkuj, totalmeshkuj}, item) => ({
			maxfemra: maxfemra + Number(item.maxfemra),
			totalfemra: totalfemra + Number(item.totalfemra),
			maxmeshkuj: maxmeshkuj + Number(item.maxmeshkuj),
			totalmeshkuj: totalmeshkuj + Number(item.totalmeshkuj),
		}),
		{maxfemra: 0, totalfemra: 0, maxmeshkuj: 0, totalmeshkuj: 0},
	);

const getGjiniaMesatarja = (total, max) => {
	if (Number(total) === 0 || Number(max) === 0) return 0;
	return (total / max) * 100;
};

export {
	setIndustry,
	showGraphInitialState,
	getDatasets,
	areFiltersEmpty,
	areArraysEmpty,
	getGjiniaDataset,
	getGjiniaMesatarja,
};
