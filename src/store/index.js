import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import reduxThunk from "redux-thunk";

import history from "../utils/history";
import reducers from "./reducers";
import sagas from "./sagas";

// eslint-disable-next-line import/no-mutable-exports
let store = null;
export function configureStore(preloadedState) {
	const sagaMiddleware = createSagaMiddleware();
	const middleware = [reduxThunk, sagaMiddleware];
	store = createStore(reducers({}, history), preloadedState, compose(applyMiddleware(...middleware)));
	sagaMiddleware.run(sagas);
	return store;
}

export function getStore() {
	return store;
}

export default store;
