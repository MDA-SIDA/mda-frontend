import home from "@sagas/home";
import login from "@sagas/login";
import {connectRouter} from "connected-react-router";
import {combineReducers} from "redux";

export default function createReducer(injectedReducers, history) {
	return combineReducers({
		app: combineReducers({
			home: combineReducers({
				index: home,
			}),
			login: combineReducers({
				index: login,
			}),
		}),
		...injectedReducers,
		router: connectRouter(history),
	});
}
