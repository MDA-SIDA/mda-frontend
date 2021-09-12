/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/RRUGET/index";
export const FETCH_RRUGET_18 = `${PREFIX}FETCH_RRUGET_18`;
export const FETCH_RRUGET_18_SUCCESS = `${PREFIX}FETCH_RRUGET_18_SUCCESS`;
export const FETCH_RRUGET_19 = `${PREFIX}FETCH_RRUGET_19`;
export const FETCH_RRUGET_19_SUCCESS = `${PREFIX}FETCH_RRUGET_19_SUCCESS`;
export const FETCH_RRUGET_20 = `${PREFIX}FETCH_RRUGET_20`;
export const FETCH_RRUGET_20_SUCCESS = `${PREFIX}FETCH_RRUGET_20_SUCCESS`;
export const FETCH_RRUGET_21 = `${PREFIX}FETCH_RRUGET_21`;
export const FETCH_RRUGET_21_SUCCESS = `${PREFIX}FETCH_RRUGET_21_SUCCESS`;

const logger = new Logger("Saga>RRUGET>Index");
const _state = {
	rruget18: null,
	rruget19: null,
	rruget20: null,
	rruget21: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_RRUGET_18_SUCCESS:
				draft.rruget18 = action.payload;
				break;

			case FETCH_RRUGET_19_SUCCESS:
				draft.rruget19 = action.payload;
				break;

			case FETCH_RRUGET_20_SUCCESS:
				draft.rruget20 = action.payload;
				break;

			case FETCH_RRUGET_21_SUCCESS:
				draft.rruget21 = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchRruget18: (payload) => createAction(FETCH_RRUGET_18, {payload}),
	fetchRruget18Success: (payload) => createAction(FETCH_RRUGET_18_SUCCESS, {payload}),
	fetchRruget19: (payload) => createAction(FETCH_RRUGET_19, {payload}),
	fetchRruget19Success: (payload) => createAction(FETCH_RRUGET_19_SUCCESS, {payload}),
	fetchRruget20: (payload) => createAction(FETCH_RRUGET_20, {payload}),
	fetchRruget20Success: (payload) => createAction(FETCH_RRUGET_20_SUCCESS, {payload}),
	fetchRruget21: (payload) => createAction(FETCH_RRUGET_21, {payload}),
	fetchRruget21Success: (payload) => createAction(FETCH_RRUGET_21_SUCCESS, {payload}),
};

export const sagas = {
	*fetchRruget18({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=rruget18`,
			);

			yield put(actions.fetchRruget18Success(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchRruget19({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=rruget19`,
			);

			yield put(actions.fetchRruget19Success(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchRruget20({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=rruget20`,
			);

			yield put(actions.fetchRruget20Success(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
	*fetchRruget21({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=rruget21`,
			);

			yield put(actions.fetchRruget21Success(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_RRUGET_18, sagas.fetchRruget18);
	yield takeLatest(FETCH_RRUGET_19, sagas.fetchRruget19);
	yield takeLatest(FETCH_RRUGET_20, sagas.fetchRruget20);
	yield takeLatest(FETCH_RRUGET_21, sagas.fetchRruget21);
};
