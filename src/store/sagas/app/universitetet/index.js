/* eslint-disable no-console */
// import Logger from "@utils/logger";
import produce from "immer";
import {takeLatest, put} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import {Universiteti} from "@assets/Data/Universiteti/index";

// import axios from "@utils/axios";

const PREFIX = "@app/universiteti/index";
export const FETCH = `${PREFIX}FETCH`;
export const FETCH_SUCCESS = `${PREFIX}FETCH_SUCCESS`;
export const SET_UNI = `${PREFIX}SET_UNI`;
export const EDIT_UNI = `${PREFIX}EDIT_UNI`;
export const EDIT_UNI_SUCCESS = `${PREFIX}EDIT_UNI_SUCCESS`;
export const DELETE_UNI = `${PREFIX}DELETE_UNI`;

// const logger = new Logger("Saga>Header>Index");
const _state = {
	uni: [],
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SUCCESS:
				draft.uni = action.payload;
				break;
			case SET_UNI:
				draft.uni = [...state.uni, action.payload];
				break;
			case EDIT_UNI:
				// eslint-disable-next-line no-console
				const updatedUni = state.uni.map((item) => {
					if (item.id === action.payload.id) {
						item = {...action.payload};
					}
					return item;
				});

				draft.uni = updatedUni;
				break;
			case DELETE_UNI:
				const uniDeleted = state.uni.filter((item) => item.id !== action.payload.id);
				draft.uni = uniDeleted;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setUni: (payload) => createAction(SET_UNI, {payload}),
	fetch: (payload) => createAction(FETCH, {payload}),
	fetchSuccess: (payload) => createAction(FETCH_SUCCESS, {payload}),
	editUni: (payload) => createAction(EDIT_UNI, {payload}),
	editUniSuccess: (payload) => createAction(EDIT_UNI_SUCCESS, {payload}),
	deleteUni: (payload) => createAction(DELETE_UNI, {payload}),
};

export const sagas = {
	*fetch() {
		try {
			// TODO: endpoint call
			yield put(actions.fetchSuccess(Universiteti));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH, sagas.fetch);
};
