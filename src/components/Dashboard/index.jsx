import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import styles from "./index.module.scss";
import Search from "../Search/index"
import Table from "./Table/index"

const tables = [{
  name: "Industrite",
  data: "345"
}, {
  name: "Industrite",
  data: "345"
},
{
  name: "Industrite",
  data: "345"
},
{
  name: "Industrite",
  data: "345"
}]

const Dashboard = () => <div className={styles.container}>
  <h1>Të dhënat</h1>
  <div class={styles.container__dashboard}>
    <Search />
    <div className={styles.container__tables}>
      {
        tables.map((table, index) => (
          <Table
            key={`${table.name} ${index}`}
            name={table.name}
            data={table.data}
            path={table.path}
          />
        ))
      }
    </div>

  </div>
</div>;

export default connect(null, null)(withRouter(Dashboard));
