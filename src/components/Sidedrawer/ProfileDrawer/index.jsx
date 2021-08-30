import React from "react";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import * as Yup from "yup";
import Button from "@common/Button";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/profile/index";
import SideDrawer from "@components/Sidedrawer/index";
import profileAvatar from "@assets/img/picture.png";
import styles from "./index.module.scss";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email.").required("Email is required!"),
	name: Yup.string()
		.max(30, "Name is too long")
		.min(2, "Name is too short")
		.required("Name is required!"),
	role: Yup.string()
		.max(30, "Role is too long")
		.min(2, "Role is too short")
		.required("Role is required!"),
	username: Yup.string()
		.max(30, "Username is too long")
		.min(2, "Username is too short")
		.required("Username is required!"),
	password: Yup.string().min(8, "Password must be at least 8 characters long."),
	confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const initialValues = (current) => ({
	name: current?.name,
	username: current?.username,
	email: current?.email,
	password: current?.password,
	role: current?.role,
});
const Index = (props) => {
	const {isSubmitting, profile, editProfile} = props;

	const submitHandler = (values, resetForm) => {
		editProfile({
			name: values?.name,
			username: values?.username,
			email: values?.email,
			password: values?.password,
			role: values?.role,
		});
		resetForm({});
		props.closed();
	};

	return (
		<SideDrawer open={props.open} closed={props.closed}>
			<div className={styles.container}>
				<div className={styles.container__header}>
					<p>Edit Profile</p>
					<div className={styles.container__profile}>
						<img src={profileAvatar} alt=""></img>
					</div>
				</div>

				<Formik
					enableReinitialize={true}
					initialValues={initialValues(profile)}
					onSubmit={(values, {resetForm, setFieldValue}) => {
						submitHandler(values, resetForm, setFieldValue);
					}}
					validationSchema={validationSchema}
				>
					{({values, errors, touched}) => (
						<Form>
							<div>
								<Input
									id="name"
									name="name"
									type="name"
									value={values?.name}
									error={errors.name}
									touched={touched.name}
									label="Name"
								/>
								<Input
									id="username"
									name="username"
									type="username"
									value={values?.username}
									error={errors.username}
									touched={touched.username}
									label="Username"
								/>
								<Input
									id="email"
									name="email"
									value={values?.email}
									error={errors.email}
									touched={touched.email}
									label="Email"
								/>

								<Input
									id="role"
									name="role"
									type="role"
									value={values?.role}
									error={errors.role}
									touched={touched.role}
									label="Role"
								/>
								<Input
									id="password"
									name="password"
									type="password"
									error={errors.password}
									touched={touched.password}
									label="New Password"
								/>
								<Input
									id="confirmPassword"
									name="confirmPassword"
									type="password"
									error={errors.confirmPassword}
									touched={touched.confirmPassword}
									label="Confirm New Password"
								/>
								<Button
									text="Edit Profile"
									type="submit"
									disabled={isSubmitting}
									overrideStyle={styles.container__submitButton}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</SideDrawer>
	);
};

const mapDispatchToProps = {
	editProfile: actions.editProfile,
};

export default connect(null, mapDispatchToProps)(withRouter(Index));
