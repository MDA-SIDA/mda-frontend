import Layout from "@components/Layout";
import {getCurrentUser} from "@utils/currentUser";
import React from "react";
import {Redirect, Route} from "react-router-dom";
const ProtectedRoute = ({component: Component, render, ...rest}) => {
	const user = getCurrentUser();
	return (
		<Route
			{...rest}
			render={(props) => {
				// TODO: uncomment
				// if (!user) {
				// 	return <Redirect to="/auth" />;
				// }
				// TODO: if (user)
				if (!user) {
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
