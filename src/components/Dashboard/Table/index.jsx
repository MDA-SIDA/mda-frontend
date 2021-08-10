import React, { useState } from 'react'
import Search from '@components/Search'
import styles from './index.module.scss'
import DataGrid from '@common/DataTable/index'
import AddData from '@components/SecondaryButton/index'
import Sidedrawer from '@components/Sidedrawer'
import Input from '@common/Input'

const Table = () => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false)

  const sideDrawerCloseHandler = () => {
    setSideDrawerIsVisible(false)
  }
  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible)
  }
  return (
    <div className={styles.container}>
      <h1>Të dhënat</h1>
      <div class={styles.container__table}>
        <div className={styles.container__table__header}>
          <Sidedrawer
            open={sideDrawerIsVisible}
            closed={sideDrawerCloseHandler}
          >
            <p>Test</p>
          </Sidedrawer>
          <Search />
          <AddData
            drawerHandler={sideDrawerToggleHandler}
            name="Shto të dhëna"
          />
        </div>
        <DataGrid />
      </div>
    </div>
  )
}

export default Table
