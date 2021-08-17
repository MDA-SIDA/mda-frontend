import React, {useState} from "react";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import * as yup from "yup";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/profile/index";
import SideDrawer from "@components/Sidedrawer/index";
import styles from "./index.module.scss";

// TODO: add this object to a separate file
const industryInputs = {
	arbk: {
		validationSchema: yup.object().shape({
			companyName: yup.string().label("Company Name").required().nullable(),
		}),
		inputs: [
			{
				type: "text",
				placeholder: "Company Name",
				name: "companyName",
				label: "Company Name",
			},
		],
	},
	masht: {
		validationSchema: yup.object().shape({
			companyName: yup.string().label("Test").required().nullable(),
		}),
		inputs: [
			{
				type: "text",
				placeholder: "Test",
				name: "test",
				label: "Test",
			},
		],
	},
};

const IndustryDrawer = ({open, closed, onSubmit, industry}) => {
	const {inputs} = industryInputs[industry];
	const validationSchema = industryInputs[industry]?.validationSchema;
	return (
		<SideDrawer open={open} closed={closed}>
			<div className={styles.container}>
				<Formik
					enableReinitialize={true}
					initialValues={{}}
					onSubmit={onSubmit}
					validationSchema={validationSchema}
				>
					{({errors, touched, values}) => (
						<Form>
							{inputs?.map((input) => (
								<Input
									name={input?.name}
									placeholder={input?.placeholder}
									error={errors[input?.name]}
									touched={touched[input?.name]}
									value={values[input?.name]}
									label={input?.label}
								/>
							))}
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

export default connect(null, mapDispatchToProps)(withRouter(IndustryDrawer));
