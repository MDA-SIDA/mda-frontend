import React, {useState} from "react";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import * as Yup from "yup";
import Button from "@common/Button";
import {Avatar} from "@material-ui/core";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/admins/index";
import moment from "moment";
import styles from "./index.module.scss";
import Sidedrawer from "..";

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
});

const initialValues = (current) => ({
	id: current?.id || "",
	email: current?.email || "",
	name: current?.name || "",
	role: current?.role || "",
	date: current?.date || "",
});

const Index = (props) => {
	const {isSubmitting, user, mode, setAdmin, editAdmin, deleteAdmin} = props;

	const [id, setId] = useState(1);

	const submitHandler = (values, id) => {
		const action = mode === "create" ? setAdmin : editAdmin;

		props.closed();
		setId(id + 1);
		action({
			id: mode === "create" ? id : user.id,
			email: values.email,
			name: values.name,
			role: values.role,
			date: moment().format("DD-MM-YYYY"),
		});
	};

  const deleteHandler=()=>{
    deleteAdmin(user)
  }

	return (
		<Sidedrawer open={props.open} closed={props.closed}>
			<div className={styles.container}>
				<div className={styles.container__header}>
					{mode === "edit" ? <p>Edit Admin</p> : <p>Add Admin</p>}
					{mode === "edit" && <button type onClick={deleteHandler}>Delete</button>}
				</div>
				<div className={styles.container__picture}>
					<Avatar style={{height: "80px", width: "80px"}} />
					<p>Add Picture</p>
				</div>

				<Formik
					enableReinitialize={true}
					initialValues={initialValues(user)}
					onSubmit={(values, {resetForm, setFieldValue}) => {
						submitHandler(values, id, resetForm, setFieldValue);
					}}
					validationSchema={validationSchema}
				>
					{({values, errors, touched}) => (
						<Form>
							<div>
								<Input
									id="email"
									name="email"
									value={values?.email}
									error={errors.email}
									touched={touched.email}
									label="Email"
								/>
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
									id="role"
									name="role"
									type="role"
									value={values?.role}
									error={errors.role}
									touched={touched.role}
									label="Role"
								/>
								<Button
									text={mode === "edit" ? "Edit Admin" : "Add Admin"}
									type="submit"
									disabled={isSubmitting}
									overrideStyle={styles.container__submitButton}
								/>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</Sidedrawer>
	);
};
const mapDispatchToProps = {
	setAdmin: actions.setAdmin,
	editAdmin: actions.editAdmin,
  deleteAdmin:actions.deleteAdmin,
};

export default connect(null, mapDispatchToProps)(withRouter(Index));
