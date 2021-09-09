/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
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
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_MASHT_SHKOLLA, sagas.fetchMashtShkolla);
	yield takeLatest(FETCH_MASHT_GJINIA, sagas.fetchMashtGjinia);
	yield takeLatest(FETCH_MASHT_GJENERATA, sagas.fetchMashtGjenerata);
	yield takeLatest(FETCH_MASHT_ETNIA, sagas.fetchMashtEtnia);
	yield takeLatest(FETCH_MASHT_RAJONI_KOMUNA, sagas.fetchMashtRajoniKomuna);
	yield takeLatest(FETCH_MASHT_KLASA, sagas.fetchMashtKlasa);
	yield takeLatest(FETCH_MASHT_QENDRA_BURIMORE_DEMTIMI, sagas.fetchMashtQendraBurimoreDemtimi);
	yield takeLatest(
		FETCH_MASHT_QENDRA_BURIMORE_GJENERATA,
		sagas.fetchMashtQendraBurimoreGjenerata,
	);
	yield takeLatest(FETCH_SHKOLLA_RAJONI_KOMUNA, sagas.fetchShkollaRajoniKomuna);
};
