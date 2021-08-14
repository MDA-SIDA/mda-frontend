/* eslint-disable no-console */
// import Logger from "@utils/logger";
import produce from "immer";
import {takeLatest, put} from "redux-saga/effects";
import createAction from "@utils/action-creator";
import {Admins} from "@assets/Data/Admins";
// import axios from "@utils/axios";

const PREFIX = "@app/admins/index";
export const FETCH = `${PREFIX}FETCH`;
export const FETCH_SUCCESS = `${PREFIX}FETCH_SUCCESS`;
export const SET_ADMIN = `${PREFIX}SET_ADMIN`;
export const EDIT_ADMIN = `${PREFIX}EDIT_ADMIN`;
export const EDIT_ADMIN_SUCCESS = `${PREFIX}EDIT_ADMIN_SUCCESS`;
export const DELETE_ADMIN = `${PREFIX}DELETE_ADMIN`;

// const logger = new Logger("Saga>Header>Index");
const _state = {
	admins: [],
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case FETCH_SUCCESS:
				draft.admins = action.payload;
				break;
			case SET_ADMIN:
				draft.admins = [...state.admins, action.payload];
				break;
			case EDIT_ADMIN:
				// eslint-disable-next-line no-console
				const updatedAdmins = state.admins.map((item) => {
					if (item.id === action.payload.id) {
						item = {...action.payload};
					}
					return item;
				});

				draft.admins = updatedAdmins;
				break;
			case DELETE_ADMIN:
				const adminsDeleted = state.admins.filter((item) => item.id !== action.payload.id);
				draft.admins = adminsDeleted;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setAdmin: (payload) => createAction(SET_ADMIN, {payload}),
	fetch: (payload) => createAction(FETCH, {payload}),
	fetchSuccess: (payload) => createAction(FETCH_SUCCESS, {payload}),
	editAdmin: (payload) => createAction(EDIT_ADMIN, {payload}),
	editAdminSuccess: (payload) => createAction(EDIT_ADMIN_SUCCESS, {payload}),
	deleteAdmin: (payload) => createAction(DELETE_ADMIN, {payload}),
};

export const sagas = {
	*fetch() {
		try {
			// TODO: endpoint call
			yield put(actions.fetchSuccess(Admins));
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	},
};

export const watcher = function* w() {
	yield takeLatest(FETCH, sagas.fetch);
};
