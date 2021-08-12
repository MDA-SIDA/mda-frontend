import React, {forwardRef} from "react";
import MaterialTable from "material-table";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
const index = ({columns, tableData}) => {
	const getMuiTheme = () =>
		createTheme({
			overrides: {
				MuiTableHead: {
					root: {
						borderBottom: "1px solid #CCCCCC",
						justifyContent: "space-around",
					},
				},
				MuiButton: {
					root: {
						fontSize: 14,
						color: "#757998",
					},
				},
				MuiTableCell: {
					root: {
						fontSize: 14,
						paddingLeft: 30,
						color: "#CCCCCC",
						borderBottom: "none",
					},
					body: {
						color: "#CCCCCC",
					},
				},
				MuiTypography: {
					body1: {
						fontSize: 13,
					},
					body2: {
						fontSize: 13,
					},
					caption: {
						fontSize: 14,
					},
				},
				MuiMenuItem: {
					root: {
						fontSize: 13,
					},
				},
				MuiTablePagination: {
					select: {
						fontSize: 13,
					},
				},
				MuiFormLabel: {
					root: {
						fontSize: 13,
					},
				},
				MuiChip: {
					root: {
						fontSize: 13,
					},
				},
				MuiPaper: {
					elevation2: {
						boxShadow: "0px 1px 0px 0px #ddd",
					},
				},
				MuiIconButton: {
					root: {
						backgroundColor: "transparent !important",
					},
				},
				MuiInputBase: {
					input: {
						fontSize: 13,
					},
				},
				MuiTableRow: {
					root: {
						border: "none",
						fontSize: 14,
					},
				},
			},
		});
	const tableIcons = {
		Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
		Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
		Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
		DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
		Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
		Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
		Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
		FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
		LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
		NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
		PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
		ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
		Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
		SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
		ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
		ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
	};

	return (
		<MuiThemeProvider theme={getMuiTheme()}>
			<div style={{maxWidth: "100%"}}>
				<MaterialTable
					options={{search: false, draggable: false}}
					columns={columns}
					data={tableData}
					title=""
					icons={tableIcons}
				/>
			</div>
		</MuiThemeProvider>
	);
};
export default index;
