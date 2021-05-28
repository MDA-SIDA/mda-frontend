import home from "@sagas/home";
import {combineReducers} from "redux";

export default function createReducer(injectedReducers) {
	return combineReducers({
		app: combineReducers({
			home: combineReducers({
				index: home,
			}),
		}),
		...injectedReducers,
	});
}
