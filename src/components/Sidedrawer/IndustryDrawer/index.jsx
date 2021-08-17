import React, {useState} from "react";
import {Formik, Form} from "formik";
import Input from "@common/Input";
import * as Yup from "yup";
import Button from "@common/Button";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {actions} from "@sagas/profile/index";
import SideDrawer from "@components/Sidedrawer/index";
import styles from "./index.module.scss";

const Index = (props) => (
	<SideDrawer open={props.open} closed={props.closed}>
		<div className={styles.container}>TESST</div>
	</SideDrawer>
);

const mapDispatchToProps = {
	editProfile: actions.editProfile,
};

export default connect(null, mapDispatchToProps)(withRouter(Index));
