import React, { useState } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import Search from '../Search/index'
import Add from '../SecondaryButton/index'
import Sidedrawer from '@components/Sidedrawer'
import DataGrid from '@common/DataTable/index'

const ManageUsers = () => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false)
  }
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }
  return (
    <div className={styles.container}>
      <h1>Menaxho Perdoruesit</h1>
      <div class={styles.container__table}>
        <div className={styles.container__table__header}>
          <Search />
          <Add name="Add New" drawerHandler={sideDrawerToggleHandler} />

          <Sidedrawer
            open={sideDrawerIsVisible}
            closed={sideDrawerCloseHandler}
          />
        </div>
        <DataGrid />
      </div>
    </div>
  )
}

export default connect(null, null)(withRouter(ManageUsers))
