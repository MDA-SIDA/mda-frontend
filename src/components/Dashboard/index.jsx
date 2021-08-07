import React from "react";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import "./index.scss";

const Dashboard = () => <div>Dashboard</div>;

export default connect(null, null)(withRouter(Dashboard));
