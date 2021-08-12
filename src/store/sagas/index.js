import {all} from "redux-saga/effects";
import {watcher as filters} from "@sagas/filters";
import {watcher as login} from "@sagas/login";
import {watcher as navigation} from "@sagas/navigation";
import {watcher as industries} from "@sagas/industries";

export default function* root() {
	yield all([filters(), login(), navigation(), industries()]);
}
