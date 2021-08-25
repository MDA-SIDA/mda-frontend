/* eslint-disable max-len */
import Logger from "@utils/logger";
import produce from "immer";
import {put, takeLatest} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import axios from "@utils/axios";
import {getParams} from "../utils";

const PREFIX = "@app/AUV/index";
export const FETCH_NR_FERMAVE_KOMUNA = `${PREFIX}FETCH_NR_FERMAVE_KOMUNA`;
export const FETCH_NR_FERMAVE_KOMUNA_SUCCESS = `${PREFIX}FETCH_NR_FERMAVE_KOMUNA_SUCCESS`;

const logger = new Logger("Saga>AUV>Index");
const _state = {
	nrFermaveNeKomuna: null,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_NR_FERMAVE_KOMUNA_SUCCESS:
				draft.nrFermaveNeKomuna = action.payload;
				break;

			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	fetchNrFermaveKomuna: (payload) => createAction(FETCH_NR_FERMAVE_KOMUNA, {payload}),
	fetchNrFermaveKomunaSuccess: (payload) =>
		createAction(FETCH_NR_FERMAVE_KOMUNA_SUCCESS, {payload}),
};

export const sagas = {
	*fetchNrFermaveKomuna({payload}) {
		try {
			const {komunaQuery, vendbanimiQuery, regjioniQuery} = getParams(payload);
			const response = yield axios.get(
				// eslint-disable-next-line max-len
				`/industries/?${komunaQuery}${vendbanimiQuery}${regjioniQuery}&type=nrFermaveNeKomuna`,
			);

			yield put(actions.fetchNrFermaveKomunaSuccess(response?.data));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH_NR_FERMAVE_KOMUNA, sagas.fetchNrFermaveKomuna);
};
