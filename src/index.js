import {setupAxios} from "@utils/axios";
import {ConnectedRouter} from "connected-react-router";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import history from "@utils/history";
import App from "./App";
import {configureStore} from "./store";
import * as serviceWorker from "./serviceWorker";
import "@assets/scss/index.scss";
import "./i18n";
import Internal from "./internal";

const store = configureStore();
setupAxios(store);

ReactDOM.render(
	history.location?.pathname === "/internal" ? (
		<Internal />
	) : (
		<BrowserRouter>
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>
		</BrowserRouter>
	),
	document.querySelector("#root"),
);
serviceWorker.unregister();
