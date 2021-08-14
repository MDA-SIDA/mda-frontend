/* eslint-disable no-console */
import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import ProfileDrawer from "@components/Sidedrawer/ProfileDrawer";
import {actions} from "@sagas/profile";
import styles from "./index.module.scss";
import profileAvatar from "../../assets/img/picture.png";
import EditButton from "../SecondaryButton/index";

const Profile = (props) => {
	const {profile} = props;
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	const sideDrawerToggleHandler = () => {
		setSideDrawerIsVisible(!sideDrawerIsVisible);
	};

	return (
		<div className={styles.container}>
			<h1>Profili</h1>
			<div className={styles.container__profile}>
				<img src={profileAvatar} alt=""></img>
				<div className={styles.container__profile__card}>
					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Name</p>
						<p className={styles.name}>{profile.name}</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Username</p>
						<p className={styles.name}>{profile.username}</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>E-mail</p>
						<p className={styles.name}>{profile.email}</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Password</p>
						<p className={styles.name}>*******</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Role</p>
						<p className={styles.name}>{profile.role}</p>
					</div>
				</div>
				<EditButton name="Edit" drawerHandler={sideDrawerToggleHandler} />
			</div>
			<ProfileDrawer
				open={sideDrawerIsVisible}
				closed={() => {
					sideDrawerCloseHandler();
				}}
				profile={profile}
			/>
		</div>
	);
};

const mapStateToProps = (state) => ({
	profile: state.app.profile.index.profile,
});

const mapDispatchToProps = {
	fetch: actions.fetchSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
