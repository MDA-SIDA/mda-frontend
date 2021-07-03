import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";

const PREFIX = "@app/Filters/index";
export const FETCH = `${PREFIX}FETCH`;
export const FETCH_SUCCESS = `${PREFIX}FETCH_SUCCESS`;

const logger = new Logger("Saga>Filters>Index");
const _state = {
	industrite: [],
	regjionet: [],
	komunat: [],
	vendbanimet: [],
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SUCCESS:
				draft[action.payload.name] = action.payload.data;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetch: (payload) => createAction(FETCH, {payload}),
	fetchSuccess: (payload) => createAction(FETCH_SUCCESS, {payload}),
};

export const sagas = {
	*fetch() {
		try {
			const vendbanimet = yield axios.get(`/filters/?name=vendbanimi`);
			const komunat = yield axios.get(`/filters/?name=komuna`);
			const regjionet = yield axios.get(`/filters/?name=regjioni`);

			const vendbanimetOptions = vendbanimet?.data?.map((vendbanimi) => ({
				value: vendbanimi.vendbanimiemri,
				label: vendbanimi.vendbanimiemri,
			}));

			const komunaOptions = komunat?.data?.map((komuna) => ({
				value: komuna.komunaemri,
				label: komuna.komunaemri,
			}));

			const regjionetOptions = regjionet?.data?.map((regjioni) => ({
				value: regjioni.regjioniemri,
				label: regjioni.regjioniemri,
			}));

			// TODO: take them from db
			const indistriteOptions = [
				{value: "ARBK", label: "ARBK"},
				{value: "shkolla", label: "Shkolla"},
				{value: "ATK", label: "ATK"},
			];

			yield put(actions.fetchSuccess({data: vendbanimetOptions, name: "vendbanimet"}));
			yield put(actions.fetchSuccess({data: komunaOptions, name: "komunat"}));
			yield put(actions.fetchSuccess({data: regjionetOptions, name: "regjionet"}));
			yield put(actions.fetchSuccess({data: indistriteOptions, name: "industrite"}));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH, sagas.fetch);
};
