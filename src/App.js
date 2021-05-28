import React from "react";
import "./App.css";
import {withRouter} from "react-router";
import {Redirect, Route, Router, Switch} from "react-router-dom";
import Home from "./components/Home";
import history from "./utils/history";

const App = () => (
	<Router history={history}>
		<Route
			render={() => (
				<Switch>
					<Route component={Home} exact path="/" />
					<Redirect to="/" />
				</Switch>
			)}
		/>
	</Router>
);

export default withRouter(App);
