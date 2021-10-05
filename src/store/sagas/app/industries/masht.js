/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";
import {getParams} from "../utils";

const PREFIX = "@app/MASHT/index";
export const FETCH_MASHT_SHKOLLA = `${PREFIX}FETCH_MASHT_SHKOLLA`;
export const FETCH_MASHT_SHKOLLA_SUCCESS = `${PREFIX}FETCH_MASHT_SHKOLLA_SUCCESS`;
export const FETCH_MASHT_GJINIA = `${PREFIX}FETCH_MASHT_GJINIA`;
export const FETCH_MASHT_GJINIA_SUCCESS = `${PREFIX}FETCH_MASHT_GJINIA_SUCCESS`;
export const FETCH_MASHT_GJENERATA = `${PREFIX}FETCH_MASHT_GJENERATA`;
export const FETCH_MASHT_GJENERATA_SUCCESS = `${PREFIX}FETCH_MASHT_GJENERATA_SUCCESS`;
export const FETCH_MASHT_ETNIA = `${PREFIX}FETCH_MASHT_ETNIA`;
export const FETCH_MASHT_ETNIA_SUCCESS = `${PREFIX}FETCH_MASHT_ETNIA_SUCCESS`;
export const FETCH_MASHT_RAJONI_KOMUNA = `${PREFIX}FETCH_MASHT_RAJONI_KOMUNA`;
export const FETCH_MASHT_RAJONI_KOMUNA_SUCCESS = `${PREFIX}FETCH_MASHT_RAJONI_KOMUNA_SUCCESS`;
export const FETCH_MASHT_KLASA = `${PREFIX}FETCH_MASHT_KLASA`;
export const FETCH_MASHT_KLASA_SUCCESS = `${PREFIX}FETCH_MASHT_KLASA_SUCCESS`;
export const FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI = `${PREFIX}FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI`;
export const FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI_SUCCESS = `${PREFIX}FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI_SUCCESS`;
export const FETCH_MASHT_QENDRA_BURIMORE_GJENERATA = `${PREFIX}FETCH_MASHT_QENDRA_BURIMORE_GJENERATA`;
export const FETCH_MASHT_QENDRA_BURIMORE_GJENERATA_SUCCESS = `${PREFIX}FETCH_MASHT_QENDRA_BURIMORE_GJENERATA_SUCCESS`;
export const FETCH_SHKOLLA_RAJONI_KOMUNA = `${PREFIX}FETCH_SHKOLLA_RAJONI_KOMUNA`;
export const FETCH_SHKOLLA_RAJONI_KOMUNA_SUCCESS = `${PREFIX}FETCH_SHKOLLA_RAJONI_KOMUNA_SUCCESS`;
export const FETCH_GJINIA_ETNITETI = `${PREFIX}FETCH_GJINIA_ETNITETI`;
export const FETCH_GJINIA_ETNITETI_SUCCESS = `${PREFIX}FETCH_GJINIA_ETNITETI_SUCCESS`;
export const FETCH_NR_NXENESVE_SHKOLLA = `${PREFIX}FETCH_NR_NXENESVE_SHKOLLA`;
export const FETCH_NR_NXENESVE_SHKOLLA_SUCCESS = `${PREFIX}FETCH_NR_NXENESVE_SHKOLLA_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>MASHT>Index");
const _state = {
	mashtShkolla: null,
	mashtGjinia: null,
	mashtGjenerata: null,
	mashtEtnia: null,
	mashtRajoniKomuna: null,
	mashtKlasa: null,
	mashtQendraBurimoreDemtimi: null,
	mashtQendraBurimoreGjenerata: null,
	shkollaRajoniKomuna: null,
	gjiniaEtniteti: null,
	nrNxenesveShkolla: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_MASHT_SHKOLLA_SUCCESS:
				draft.mashtShkolla = action.payload;
				break;

			case FETCH_MASHT_GJINIA_SUCCESS:
				draft.mashtGjinia = action.payload;
				break;

			case FETCH_MASHT_GJENERATA_SUCCESS:
				draft.mashtGjenerata = action.payload;
				break;

			case FETCH_MASHT_ETNIA_SUCCESS:
				draft.mashtEtnia = action.payload;
				break;

			case FETCH_MASHT_RAJONI_KOMUNA_SUCCESS:
				draft.mashtRajoniKomuna = action.payload;
				break;

			case FETCH_MASHT_KLASA_SUCCESS:
				draft.mashtKlasa = action.payload;
				break;

			case FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI_SUCCESS:
				draft.mashtQendraBurimoreDemtimi = action.payload;
				break;

			case FETCH_MASHT_QENDRA_BURIMORE_GJENERATA_SUCCESS:
				draft.mashtQendraBurimoreGjenerata = action.payload;
				break;

			case FETCH_SHKOLLA_RAJONI_KOMUNA_SUCCESS:
				draft.shkollaRajoniKomuna = action.payload;
				break;

			case FETCH_GJINIA_ETNITETI_SUCCESS:
				draft.gjiniaEtniteti = action.payload;
				break;

			case FETCH_NR_NXENESVE_SHKOLLA_SUCCESS:
				draft.nrNxenesveShkolla = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchMashtShkolla: (payload) => createAction(FETCH_MASHT_SHKOLLA, {payload}),
	fetchMashtShkollaSuccess: (payload) => createAction(FETCH_MASHT_SHKOLLA_SUCCESS, {payload}),
	fetchMashtGjinia: (payload) => createAction(FETCH_MASHT_GJINIA, {payload}),
	fetchMashtGjiniaSuccess: (payload) => createAction(FETCH_MASHT_GJINIA_SUCCESS, {payload}),
	fetchMashtGjenerata: (payload) => createAction(FETCH_MASHT_GJENERATA, {payload}),
	fetchMashtGjenerataSuccess: (payload) => createAction(FETCH_MASHT_GJENERATA_SUCCESS, {payload}),
	fetchMashtEtnia: (payload) => createAction(FETCH_MASHT_ETNIA, {payload}),
	fetchMashtEtniaSuccess: (payload) => createAction(FETCH_MASHT_ETNIA_SUCCESS, {payload}),
	fetchMashtRajoniKomuna: (payload) => createAction(FETCH_MASHT_RAJONI_KOMUNA, {payload}),
	fetchMashtRajoniKomunaSuccess: (payload) =>
		createAction(FETCH_MASHT_RAJONI_KOMUNA_SUCCESS, {payload}),
	fetchMashtKlasa: (payload) => createAction(FETCH_MASHT_KLASA, {payload}),
	fetchMashtKlasaSuccess: (payload) => createAction(FETCH_MASHT_KLASA_SUCCESS, {payload}),
	fetchMashtQendraBurimoreDemtimi: (payload) =>
		createAction(FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI, {payload}),
	fetchMashtQendraBurimoreDemtimiSuccess: (payload) =>
		createAction(FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI_SUCCESS, {payload}),
	fetchMashtQendraBurimoreGjenerata: (payload) =>
		createAction(FETCH_MASHT_QENDRA_BURIMORE_GJENERATA, {payload}),
	fetchMashtQendraBurimoreGjenerataSuccess: (payload) =>
		createAction(FETCH_MASHT_QENDRA_BURIMORE_GJENERATA_SUCCESS, {payload}),
	fetchShkollaRajoniKomuna: (payload) => createAction(FETCH_SHKOLLA_RAJONI_KOMUNA, {payload}),
	fetchShkollaRajoniKomunaSuccess: (payload) =>
		createAction(FETCH_SHKOLLA_RAJONI_KOMUNA_SUCCESS, {payload}),
	fetchGjiniaEtniteti: (payload) => createAction(FETCH_GJINIA_ETNITETI, {payload}),
	fetchGjiniaEtnitetiSuccess: (payload) => createAction(FETCH_GJINIA_ETNITETI_SUCCESS, {payload}),
	fetchNrNxenesveShkolla: (payload) => createAction(FETCH_NR_NXENESVE_SHKOLLA, {payload}),
	fetchNrNxenesveShkollaSuccess: (payload) =>
		createAction(FETCH_NR_NXENESVE_SHKOLLA_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchMashtShkolla({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtShkolla`,
			);

			yield put(actions.fetchMashtShkollaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtGjinia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtGjinia`,
			);

			yield put(actions.fetchMashtGjiniaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtGjenerata({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtGjenerata`,
			);

			yield put(actions.fetchMashtGjenerataSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtEtnia({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtEtnia`,
			);

			yield put(actions.fetchMashtEtniaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtRajoniKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtRajoniKomuna`,
			);

			yield put(actions.fetchMashtRajoniKomunaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtKlasa({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtKlasa`,
			);

			yield put(actions.fetchMashtKlasaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtQendraBurimoreDemtimi({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtQendraBurimoreDemtimi`,
			);

			yield put(actions.fetchMashtQendraBurimoreDemtimiSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMashtQendraBurimoreGjenerata({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=mashtQendraBurimoreGjenerata`,
			);

			yield put(actions.fetchMashtQendraBurimoreGjenerataSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchShkollaRajoniKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=shkollaRajoniKomuna`,
			);

			yield put(actions.fetchShkollaRajoniKomunaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchGjiniaEtniteti({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=gjiniaEtniteti`,
			);

			yield put(actions.fetchGjiniaEtnitetiSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchNrNxenesveShkolla({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=nrNxenesveShkolla`,
			);

			yield put(actions.fetchNrNxenesveShkollaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchMashtShkolla, {payload}),
			call(sagas.fetchMashtGjinia, {payload}),
			call(sagas.fetchMashtGjenerata, {payload}),
			call(sagas.fetchMashtEtnia, {payload}),
			call(sagas.fetchMashtRajoniKomuna, {payload}),
			call(sagas.fetchMashtKlasa, {payload}),
			call(sagas.fetchMashtQendraBurimoreDemtimi, {payload}),
			call(sagas.fetchMashtQendraBurimoreGjenerata, {payload}),
			call(sagas.fetchShkollaRajoniKomuna, {payload}),
			call(sagas.fetchGjiniaEtniteti, {payload}),
			call(sagas.fetchNrNxenesveShkolla, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
