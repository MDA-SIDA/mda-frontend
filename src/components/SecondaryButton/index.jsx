import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";

const SecondaryButton = ({ name, color, drawerHandler }) => {
  console.log(drawerHandler, 'dra')
  return (
    <div className={styles.container}>
      <div className={styles.container__button}>
        <button drawerHandler={drawerHandler}
          style={{ borderColor: { color } }} type="submit">{name}</button>
      </div>
    </div>
  )
}

export default connect(null, null)(withRouter(SecondaryButton));