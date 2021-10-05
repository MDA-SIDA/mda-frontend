/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest, all, call} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {actions as layoutActions} from "@sagas/layout";
import {getParams} from "../utils";

const PREFIX = "@app/DOGANA/index";
export const FETCH_DOGANA_70 = `${PREFIX}FETCH_DOGANA_70`;
export const FETCH_DOGANA_70_SUCCESS = `${PREFIX}FETCH_DOGANA_70_SUCCESS`;
export const FETCH_DOGANA_71 = `${PREFIX}FETCH_DOGANA_71`;
export const FETCH_DOGANA_71_SUCCESS = `${PREFIX}FETCH_DOGANA_71_SUCCESS`;
export const FETCH_DOGANA_72 = `${PREFIX}FETCH_DOGANA_72`;
export const FETCH_DOGANA_72_SUCCESS = `${PREFIX}FETCH_DOGANA_72_SUCCESS`;
export const FETCH_DOGANA_73 = `${PREFIX}FETCH_DOGANA_73`;
export const FETCH_DOGANA_73_SUCCESS = `${PREFIX}FETCH_DOGANA_73_SUCCESS`;
export const FETCH_DOGANA_74 = `${PREFIX}FETCH_DOGANA_74`;
export const FETCH_DOGANA_74_SUCCESS = `${PREFIX}FETCH_DOGANA_74_SUCCESS`;
export const FETCH_ALL = `${PREFIX}FETCH_ALL`;

const logger = new Logger("Saga>DOGANA>Index");
const _state = {
	dogana70: null,
	dogana71: null,
	dogana72: null,
	dogana73: null,
	dogana74: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_DOGANA_70_SUCCESS:
				draft.dogana70 = action.payload;
				break;

			case FETCH_DOGANA_71_SUCCESS:
				draft.dogana71 = action.payload;
				break;

			case FETCH_DOGANA_72_SUCCESS:
				draft.dogana72 = action.payload;
				break;

			case FETCH_DOGANA_73_SUCCESS:
				draft.dogana73 = action.payload;
				break;

			case FETCH_DOGANA_74_SUCCESS:
				draft.dogana74 = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchDogana70: (payload) => createAction(FETCH_DOGANA_70, {payload}),
	fetchDogana70Success: (payload) => createAction(FETCH_DOGANA_70_SUCCESS, {payload}),
	fetchDogana71: (payload) => createAction(FETCH_DOGANA_71, {payload}),
	fetchDogana71Success: (payload) => createAction(FETCH_DOGANA_71_SUCCESS, {payload}),
	fetchDogana72: (payload) => createAction(FETCH_DOGANA_72, {payload}),
	fetchDogana72Success: (payload) => createAction(FETCH_DOGANA_72_SUCCESS, {payload}),
	fetchDogana73: (payload) => createAction(FETCH_DOGANA_73, {payload}),
	fetchDogana73Success: (payload) => createAction(FETCH_DOGANA_73_SUCCESS, {payload}),
	fetchDogana74: (payload) => createAction(FETCH_DOGANA_74, {payload}),
	fetchDogana74Success: (payload) => createAction(FETCH_DOGANA_74_SUCCESS, {payload}),
	fetchAll: (payload) => createAction(FETCH_ALL, {payload}),
};

export const sagas = {
	*fetchDogana70({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}${regimeQuery}type=dogana70`,
			);

			yield put(actions.fetchDogana70Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchDogana71({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}${regimeQuery}type=dogana71`,
			);

			yield put(actions.fetchDogana71Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchDogana72({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}${regimeQuery}type=dogana72`,
			);

			yield put(actions.fetchDogana72Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchDogana73({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}${regimeQuery}type=dogana73`,
			);

			yield put(actions.fetchDogana73Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchDogana74({payload}) {
		try {
			const {vitetQuery, regimeQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/dogana?${vitetQuery}${regimeQuery}type=dogana74`,
			);

			yield put(actions.fetchDogana74Success(response?.data));
			return response.data;
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchAll({payload}) {
		yield put(layoutActions.setLoading(true));
		yield all([
			call(sagas.fetchDogana70, {payload}),
			call(sagas.fetchDogana71, {payload}),
			call(sagas.fetchDogana72, {payload}),
			call(sagas.fetchDogana73, {payload}),
			call(sagas.fetchDogana74, {payload}),
		]);
		yield put(layoutActions.setLoading(false));
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_ALL, sagas.fetchAll);
};
