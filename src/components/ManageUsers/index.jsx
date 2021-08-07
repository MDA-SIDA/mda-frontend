import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";
import Search from "../Search/index"
import Add from "../SecondaryButton/index"


const ManageUsers = () => <div className={styles.container}>
  <h1>Menaxho Perdoruesit</h1>
  <div class={styles.container__table}>
    <div className={styles.container__table__header}>
      <Search />
      <Add name="Add New" />
    </div>
  </div>
</div>;

export default connect(null, null)(withRouter(ManageUsers));
