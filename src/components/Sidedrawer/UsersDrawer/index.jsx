import React from "react";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import * as Yup from "yup";
import Button from "@common/Button";
import Sidedrawer from "..";
import {Avatar} from '@material-ui/core';
import styles from "./index.module.scss";

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email.").required("Email is required!"),
	name: Yup.string()
		.max(30, "Name is too long").min(2,'Name is too short')
		.required("Name is required!"),
        	role: Yup.string()
		.max(30, "Role is too long").min(2,'Role is too short')
		.required("Role is required!")

});

const initialValues = {
	email: "",
	name: "",
    role:""
};
const index = (props) => {
	const {handleRegister, isSubmitting} = props;
	return (
		<Sidedrawer open={props.open} closed={props.closed}>
			<div className={styles.container}>
				<div className={styles.container__header}>
					<p>Add Admin</p>
                	<button type>Delete</button>
				</div>
                <div  className={styles.container__picture}><Avatar  style={{ height: '80px', width: '80px' }}/>
              <p>Add Picture</p>
                </div>
            
				<Formik
					enableReinitialize={true}
					initialValues={initialValues}
					onSubmit={(values) => handleRegister(values)}
					validationSchema={validationSchema}
				>
					{({errors, touched}) => (
						<Form>
							<div>
								<Input
									id="email"
									name="email"
									error={errors.email}
									touched={touched.email}
									label="Email"
								/>
								<Input
									id="name"
									name="name"
									type="name"
									error={errors.name}
									touched={touched.name}
									label="Name"
								/>
                                	<Input
									id="role"
									name="role"
									type="role"
									error={errors.role}
									touched={touched.role}
									label="Role"
								/>
								<Button
									text="Add Admin"
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

export default index;
