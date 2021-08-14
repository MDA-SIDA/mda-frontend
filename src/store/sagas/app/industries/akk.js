/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/AKK/index";
export const FETCH_NR_NDERTESAVE = `${PREFIX}FETCH_NR_NDERTESAVE`;
export const FETCH_NR_NDERTESAVE_SUCCESS = `${PREFIX}FETCH_NR_NDERTESAVE_SUCCESS`;

const logger = new Logger("Saga>AKK>Index");
const _state = {
	nrNdertesave: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_NR_NDERTESAVE_SUCCESS:
				draft.nrNdertesave = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchNrNdertesave: (payload) => createAction(FETCH_NR_NDERTESAVE, {payload}),
	fetchNrNdertesaveSuccess: (payload) => createAction(FETCH_NR_NDERTESAVE_SUCCESS, {payload}),
};

export const sagas = {
	*fetchNrNdertesave({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=nrNdertesave`,
			);

			yield put(actions.fetchNrNdertesaveSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_NR_NDERTESAVE, sagas.fetchNrNdertesave);
};
