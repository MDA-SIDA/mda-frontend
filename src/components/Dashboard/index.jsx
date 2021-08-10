import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import styles from './index.module.scss'
import Search from '../Search/index'
import TableCard from './TableCard/index'
import { Route, Redirect } from 'react-router-dom'
import Table from './Table/index'
import { TableData } from '@assets/Data/TableData'

const tables = [
  {
    name: 'Industrite',
    data: '345',
  },
  {
    name: 'Industrite1',
    data: '345',
  },
  {
    name: 'Industrite2',
    data: '345',
  },
  {
    name: 'Industrite3',
    data: '345',
  },
]

const Dashboard = (props) => {
  return (
    <div className={styles.container}>
      <h1>Të dhënat</h1>
      <div className={styles.container__dashboard}>
        <Search />
        <div className={styles.container__tables}>
          {TableData.map((table, index) => (
            <TableCard
              key={`${table.name} ${index}`}
              name={table.name}
              // data={table.data}
              // path={table.path}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default connect(null, null)(withRouter(Dashboard))
