/* eslint-disable no-console */
// import Logger from "@utils/logger";
import produce from "immer";
import {takeLatest, put} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import {Arbk} from "@assets/Data/Arbk/index";

// import axios from "@utils/axios";

const PREFIX = "@app/arbk/index";
export const FETCH = `${PREFIX}FETCH`;
export const FETCH_SUCCESS = `${PREFIX}FETCH_SUCCESS`;
export const SET_ARBK = `${PREFIX}SET_ARBK`;
export const EDIT_ARBK = `${PREFIX}EDIT_ARBK`;
export const EDIT_ARBK_SUCCESS = `${PREFIX}EDIT_ARBK_SUCCESS`;
export const DELETE_ARBK = `${PREFIX}DELETE_ARBK`;

// const logger = new Logger("Saga>Header>Index");
const _state = {
	arbk: [],
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SUCCESS:
				draft.arbk = action.payload;
				break;
			case SET_ARBK:
				draft.arbk = [...state.arbk, action.payload];
				break;
			case EDIT_ARBK:
				// eslint-disable-next-line no-console
				const updatedArbk = state.arbk.map((item) => {
					if (item.id === action.payload.id) {
						item = {...action.payload};
					}
					return item;
				});

				draft.arbk = updatedArbk;
				break;
			case DELETE_ARBK:
				const arbkDeleted = state.arbk.filter((item) => item.id !== action.payload.id);
				draft.arbk = arbkDeleted;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setArbk: (payload) => createAction(SET_ARBK, {payload}),
	fetch: (payload) => createAction(FETCH, {payload}),
	fetchSuccess: (payload) => createAction(FETCH_SUCCESS, {payload}),
	editArbk: (payload) => createAction(EDIT_ARBK, {payload}),
	editArbkSuccess: (payload) => createAction(EDIT_ARBK_SUCCESS, {payload}),
	deleteArbk: (payload) => createAction(DELETE_ARBK, {payload}),
};

export const sagas = {
	*fetch() {
		try {
			// TODO: endpoint call
			yield put(actions.fetchSuccess(Arbk));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH, sagas.fetch);
};
