import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CircularProgress} from "@material-ui/core";

export default function OActivityIndicator(props) {
	const useStyles = makeStyles((theme) => ({
		root: {
			position: "relative",
		},
		bottom: {
			color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
		},
		top: {
			color: "#005293",
			animationDuration: "550ms",
			position: "absolute",
			left: 0,
		},
		circle: {
			strokeLinecap: "round",
		},
	}));
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CircularProgress
				variant="determinate"
				className={classes.bottom}
				size={props.size || 40}
				thickness={4}
				{...props}
				value={100}
			/>
			<CircularProgress
				variant="indeterminate"
				disableShrink
				className={classes.top}
				classes={{
					circle: classes.circle,
				}}
				size={props.size || 40}
				thickness={4}
				{...props}
			/>
		</div>
	);
}
