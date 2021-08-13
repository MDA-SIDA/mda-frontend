import produce from "immer";

const _state = {};

const reducer = (state = _state, action) =>
	produce(state, (draft) => {
		switch (action.type) {
			default:
				return state;
		}
	});
export default reducer;

export const actions = {};

export const sagas = {};

export const watcher = function* w() {
	// TODO
};
