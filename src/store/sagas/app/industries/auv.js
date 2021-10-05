/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";
import {getParams} from "../utils";

const PREFIX = "@app/AUV/index";
export const FETCH_AUV_RAJONI_KOMUNA = `${PREFIX}FETCH_AUV_RAJONI_KOMUNA`;
export const FETCH_AUV_RAJONI_KOMUNA_SUCCESS = `${PREFIX}FETCH_AUV_RAJONI_KOMUNA_SUCCESS`;
export const FETCH_AUV_KATEGORIA = `${PREFIX}FETCH_AUV_KATEGORIA`;
export const FETCH_AUV_KATEGORIA_SUCCESS = `${PREFIX}FETCH_AUV_KATEGORIA_SUCCESS`;
export const FETCH_AUV_KOMUNA_NR_KAFSHEVE = `${PREFIX}FETCH_AUV_KOMUNA_NR_KAFSHEVE`;
export const FETCH_AUV_KOMUNA_NR_KAFSHEVE_SUCCESS = `${PREFIX}FETCH_AUV_KOMUNA_NR_KAFSHEVE_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>AUV>Index");
const _state = {
	auvRajoniKomuna: null,
	auvKategoria: null,
	auvKomunaNrKafsheve: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_AUV_RAJONI_KOMUNA_SUCCESS:
				draft.auvRajoniKomuna = action.payload;
				break;

			case FETCH_AUV_KATEGORIA_SUCCESS:
				draft.auvKategoria = action.payload;
				break;

			case FETCH_AUV_KOMUNA_NR_KAFSHEVE_SUCCESS:
				draft.auvKomunaNrKafsheve = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchAuvRajoniKomuna: (payload) => createAction(FETCH_AUV_RAJONI_KOMUNA, {payload}),
	fetchAuvRajoniKomunaSuccess: (payload) =>
		createAction(FETCH_AUV_RAJONI_KOMUNA_SUCCESS, {payload}),
	fetchAuvKategoria: (payload) => createAction(FETCH_AUV_KATEGORIA, {payload}),
	fetchAuvKategoriaSuccess: (payload) => createAction(FETCH_AUV_KATEGORIA_SUCCESS, {payload}),
	fetchAuvKomunaNrKafsheve: (payload) => createAction(FETCH_AUV_KOMUNA_NR_KAFSHEVE, {payload}),
	fetchAuvKomunaNrKafsheveSuccess: (payload) =>
		createAction(FETCH_AUV_KOMUNA_NR_KAFSHEVE_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchAuvRajoniKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=auvRajoniKomuna`,
			);

			yield put(actions.fetchAuvRajoniKomunaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAuvKategoria({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=auvKategoria`,
			);

			yield put(actions.fetchAuvKategoriaSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAuvKomunaNrKafsheve({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=auvKomunaNrKafsheve`,
			);

			yield put(actions.fetchAuvKomunaNrKafsheveSuccess(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchAuvRajoniKomuna, {payload}),
			call(sagas.fetchAuvKategoria, {payload}),
			call(sagas.fetchAuvKomunaNrKafsheve, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
