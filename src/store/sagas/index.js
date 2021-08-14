import {all} from "redux-saga/effects";
import {watcher as filters} from "@sagas/filters";
import {watcher as login} from "@sagas/login";
import {watcher as navigation} from "@sagas/navigation";
import {watcher as up} from "@sagas/industries/up";
import {watcher as atk} from "@sagas/industries/atk";
import {watcher as arbk} from "@sagas/industries/arbk";

export default function* root() {
	yield all([filters(), login(), navigation(), up(), atk(), arbk()]);
}
