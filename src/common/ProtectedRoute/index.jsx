import Layout from "@components/Layout";
import React from "react";
import {Redirect, Route} from "react-router-dom";
const ProtectedRoute = ({component: Component, render, ...rest}) => {
	const token = localStorage.getItem("token");
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!token) {
					return <Redirect to="/auth" />;
				}
				if (token) {
					return Component ? (
						<Layout>
							<Component {...props} {...rest} />
						</Layout>
					) : (
						render(props)
					);
				}
				return <Redirect to="/" />;
			}}
		/>
	);
};
export default ProtectedRoute;
