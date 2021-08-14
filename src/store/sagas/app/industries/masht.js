/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/MASHT/index";
export const FETCH_GJINIA_ENTITETI = `${PREFIX}FETCH_GJINIA_ENTITETI`;
export const FETCH_GJINIA_ENTITETI_SUCCESS = `${PREFIX}FETCH_GJINIA_ENTITETI_SUCCESS`;
export const FETCH_NR_NXENESVE_SHKOLLA = `${PREFIX}FETCH_NR_NXENESVE_SHKOLLA`;
export const FETCH_NR_NXENESVE_SHKOLLA_SUCCESS = `${PREFIX}FETCH_NR_NXENESVE_SHKOLLA_SUCCESS`;

const logger = new Logger("Saga>MASHT>Index");
const _state = {
	gjiniaEntiteti: null,
	nrNxenesveShkolla: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_GJINIA_ENTITETI_SUCCESS:
				draft.gjiniaEntiteti = action.payload;
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
	fetchGjiniaEntiteti: (payload) => createAction(FETCH_GJINIA_ENTITETI, {payload}),
	fetchGjiniaEntitetiSuccess: (payload) => createAction(FETCH_GJINIA_ENTITETI_SUCCESS, {payload}),
	fetchNrNxenesveShkolla: (payload) => createAction(FETCH_NR_NXENESVE_SHKOLLA, {payload}),
	fetchNrNxenesveShkollaSuccess: (payload) =>
		createAction(FETCH_NR_NXENESVE_SHKOLLA_SUCCESS, {payload}),
};

export const sagas = {
	*fetchGjiniaEntiteti({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=gjiniaEntiteti`,
			);

			yield put(actions.fetchGjiniaEntitetiSuccess(response?.data));
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
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_GJINIA_ENTITETI, sagas.fetchGjiniaEntiteti);
	yield takeLatest(FETCH_NR_NXENESVE_SHKOLLA, sagas.fetchNrNxenesveShkolla);
};
