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
				draft.vendbanimet = action.payload;
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
			const response = yield axios.get(`/filters/vendbanimet`);

			const options = response?.data?.map((vendbanimi) => ({
				value: vendbanimi.vendbanimiemri,
				label: vendbanimi.vendbanimiemri,
			}));

			yield put(actions.fetchSuccess(options));
		} catch (error) {
			logger.error(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH, sagas.fetch);
};
