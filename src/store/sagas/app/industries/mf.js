/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";

const PREFIX = "@app/MF/index";
export const FETCH_MF_81 = `${PREFIX}FETCH_MF_81`;
export const FETCH_MF_81_SUCCESS = `${PREFIX}FETCH_MF_81_SUCCESS`;
export const FETCH_MF_82 = `${PREFIX}FETCH_MF_82`;
export const FETCH_MF_82_SUCCESS = `${PREFIX}FETCH_MF_82_SUCCESS`;
export const FETCH_MF_83 = `${PREFIX}FETCH_MF_83`;
export const FETCH_MF_83_SUCCESS = `${PREFIX}FETCH_MF_83_SUCCESS`;
export const FETCH_MF_84 = `${PREFIX}FETCH_MF_84`;
export const FETCH_MF_84_SUCCESS = `${PREFIX}FETCH_MF_84_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>MF>Index");
const _state = {
	mf81: null,
	mf82: null,
	mf83: null,
	mf84: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_MF_81_SUCCESS:
				draft.mf81 = action.payload;
				break;

			case FETCH_MF_82_SUCCESS:
				draft.mf82 = action.payload;
				break;

			case FETCH_MF_83_SUCCESS:
				draft.mf823 = action.payload;
				break;

			case FETCH_MF_84_SUCCESS:
				draft.mf84 = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchMF81: (payload) => createAction(FETCH_MF_81, {payload}),
	fetchMF81Success: (payload) => createAction(FETCH_MF_81_SUCCESS, {payload}),
	fetchMF82: (payload) => createAction(FETCH_MF_82, {payload}),
	fetchMF82Success: (payload) => createAction(FETCH_MF_82_SUCCESS, {payload}),
	fetchMF83: (payload) => createAction(FETCH_MF_83, {payload}),
	fetchMF83Success: (payload) => createAction(FETCH_MF_83_SUCCESS, {payload}),
	fetchMF84: (payload) => createAction(FETCH_MF_84, {payload}),
	fetchMF84Success: (payload) => createAction(FETCH_MF_84_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchMF81() {
		try {
			const response = yield axios.get(`/industries/?type=mf81`);
			yield put(actions.fetchMF81Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMF82() {
		try {
			const response = yield axios.get(`/industries/?type=mf82`);
			yield put(actions.fetchMF82Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMF83() {
		try {
			const response = yield axios.get(`/industries/?type=mf83`);
			yield put(actions.fetchMF83Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchMF84() {
		try {
			const response = yield axios.get(`/industries/?type=mf84`);
			yield put(actions.fetchMF84Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchMF81, {payload}),
			call(sagas.fetchMF82, {payload}),
			call(sagas.fetchMF83, {payload}),
			call(sagas.fetchMF84, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
