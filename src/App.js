import ProtectedRoute from "@common/ProtectedRoute";
import React from "react";
import {Redirect, Route, Switch, Router} from "react-router-dom";
import history from "@utils/history";
import Home from "@components/Home";
import Login from "@components/Login";
import Dashboard from "@components/Dashboard";

const App = () => (
	<Router history={history}>
		<Switch>
			<Route path="/auth" component={Login} />
			<ProtectedRoute exact path="/" component={Home} />
			<ProtectedRoute exact path="/dashboard" component={Dashboard} />
			<Redirect to="/" />
		</Switch>
	</Router>
);

export default App;
