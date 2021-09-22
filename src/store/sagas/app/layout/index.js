import produce from "immer";

import createAction from "@utils/action-creator";

const PREFIX = "@app/layout/index";
export const SET_LOADING = `${PREFIX}SET_LOADING`;

const _state = {
	loading: false,
};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			case SET_LOADING:
				draft.loading = action.payload;
				break;
			default:
				return state;
		}
	});
export default reducer;

export const actions = {
	setLoading: (payload) => createAction(SET_LOADING, {payload}),
};

export const sagas = {};

// eslint-disable-next-line no-empty-function
export const watcher = function* w() {};
