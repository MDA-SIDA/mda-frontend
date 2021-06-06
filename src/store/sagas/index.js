import {all} from "redux-saga/effects";
import {watcher as home} from "@sagas/home";
import {watcher as login} from "@sagas/login";
import {watcher as navigation} from "@sagas/navigation";

export default function* root() {
	yield all([home(), login(), navigation()]);
}
