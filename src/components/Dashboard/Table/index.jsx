import Search from '@components/Search'
import React from 'react'
import styles from './index.module.scss'
import DataGrid from '@common/DataTable/index'
import AddData from '@components/SecondaryButton/index'

const Table = () => {
  return (
    <div className={styles.container}>
      <h1>Të dhënat</h1>
      <div class={styles.container__table}>
        <div className={styles.container__table__header}>
          <Search />
          <AddData name="Shto të dhëna" />
        </div>
        <DataGrid />
      </div>
    </div>
  )
}

export default Table
