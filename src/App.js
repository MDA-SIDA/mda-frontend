import ProtectedRoute from "@common/ProtectedRoute";
import React from "react";
import {Redirect, Route, Switch, Router} from "react-router-dom";
import history from "@utils/history";
import Home from "@components/Home";
import Login from "@components/Login";
import Dashboard from "@components/Dashboard";
import Profile from "@components/Profile";
import Manage from "@components/ManageUsers";
import Table from "@components/Dashboard/Table";

const App = () => (
	<Router history={history}>
		<Switch>
			<Route path="/auth" component={Login} />
			<Route exact path="/" component={Home} />
			<ProtectedRoute exact path="/dashboard" component={Dashboard} />
			<ProtectedRoute exact path="/profile" component={Profile} />
			<ProtectedRoute exact path="/manage" component={Manage} />
			<ProtectedRoute path="/:name" component={Table} />
			<Redirect to="/" />
		</Switch>
	</Router>
);

export default App;
