import React, {useState} from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import styles from "./index.module.scss";
import profile from "../../assets/img/picture.png";
import EditButton from "../SecondaryButton/index";
import Sidedrawer from "../Sidedrawer";
import Backdrop from "../Backdrop/index";

const Profile = (props) => {
	const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

	const sideDrawerCloseHandler = () => {
		setSideDrawerIsVisible(false);
	};
	return (
		<div className={styles.container}>
			<h1>Profili</h1>
			<div className={styles.container__profile}>
				<img src={profile}></img>
				<div className={styles.container__profile__card}>
					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Name</p>
						<p className={styles.name}>Driton Dalipi</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Username</p>
						<p className={styles.name}>dritondalipi</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>E-mail</p>
						<p className={styles.name}>dritondalipi@mda.al</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Password</p>
						<p className={styles.name}>******</p>
					</div>

					<div className={styles.container__profile__card__input}>
						<p className={styles.label}>Role</p>
						<p className={styles.name}>Superadmin</p>
					</div>
				</div>
				<EditButton name="Edit" click={props.drawerHandler} showDrawer />
			</div>
			<Sidedrawer open={sideDrawerIsVisible} close={sideDrawerCloseHandler} />
			<Backdrop />
		</div>
	);
};

export default connect(null, null)(withRouter(Profile));
