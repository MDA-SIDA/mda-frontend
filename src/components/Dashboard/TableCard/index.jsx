import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

const tableCard = ({ name, data, goToDetails }) => (
  <div class={styles.container__table}>
    <div className={styles.container__table__header}>
      <p>{name}</p>
      <span>{data} të dhëna</span>
    </div>
    <Link to={'/' + name} className={styles.container__table__footer}>
      See Details
    </Link>
  </div>
)

export default connect(null, null)(withRouter(tableCard))
