import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import * as Yup from "yup";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import Button from "@common/Button";
import {actions} from "@sagas/login";
import styles from "./index.module.scss";
import Footer from "../Footer/index"
import logo from "../../assets/img/svg/logoLogin.svg"

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email.").required("Email is required!"),
	password: Yup.string()
		// TODO: change 4 to 8
		.min(4, "Password must be at least 8 characters long.")
		.required("Password is required!"),
});

const initialValues = {
	email: "",
	password: "",
};

function Login(props) {
	const {handleLogin, isSubmitting} = props;

	return (
		<div className={styles.container}>
			<div className={styles.container__card}>
				<div className={styles.container__card__form}>
					<img src={logo}></img>
					<Formik
						enableReinitialize={true}
						initialValues={initialValues}
						onSubmit={(values) => handleLogin(values)}
						validationSchema={validationSchema}
					>
						{({errors, touched}) => (
							<Form>
								<div className={styles.container__card__form__items}>
									<Input
										id="email"
										name="email"
										placeholder="user@domain.com"
										error={errors.email}
										touched={touched.email}
										label="Email"
									/>
									<Input
										id="password"
										name="password"
										type="password"
										error={errors.password}
										touched={touched.password}
										label="Password"
									/>
									<Button
										text="Log In"
										type="submit"
										disabled={isSubmitting}
										overrideStyle={styles.button}
									/>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	isSubmitting: state.app.login.index.isSubmitting,
});

const mapDispatchToProps = {
	handleLogin: actions.post,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
