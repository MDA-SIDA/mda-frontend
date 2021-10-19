/* eslint-disable max-len */
import React from "react";

function iframe() {
	return {
		__html: `
		<!DOCTYPE html>
		<html lang="en">
		  <head>
			<meta charset="utf-8" />
			<link rel="icon" href="%PUBLIC_URL%/logo.png" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="theme-color" content="#000000" />
			<meta
			  name="description"
			  content="Web site created using create-react-app"
			/>
			<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
			<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
			<style>
			  html body {
				width: 100%;
				height: 100%;
				padding: 0px;
				margin: 0px;
				overflow: hidden;
				font-family: arial;
				font-size: 10px;
				color: #6e6e6e;
				background-color: #000;
			  }
			  #preview-frame {
				width: 100%;
				background-color: #fff;
			  }
			</style>
			<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
			<script>
			  //function to fix height of iframe!
			  var calcHeight = function () {
				//var headerDimensions = 0; //$('#header-bar').height();
				$('#preview-frame').height($(window).height())
			  }
		
			  $(document).ready(function () {
				calcHeight()
				/*$('#header-bar a.close').mouseover(function() {
					 $('#header-bar a.close').addClass('activated');
				   }).mouseout(function() {
					 $('#header-bar a.close').removeClass('activated');
				   });*/
			  })
		
			  $(window)
				.resize(function () {
				  calcHeight()
				})
				.load(function () {
				  calcHeight()
				})
			</script>
			<title>Kosovo 2040</title>
		  </head>
		  <body>
			<iframe
			  id="preview-frame"
			  src="https://app.powerbi.com/view?r=eyJrIjoiYTYzNzQ2NTktNjY4NC00NTQ0LTgyZGUtM2FkMjc0NDdmNDBhIiwidCI6ImYyZTEyMWE1LTMzZDYtNDhjNC1hNTdiLWFjNjAwMWI2YjFlMCIsImMiOjh9"
			  name="preview-frame"
			  frameborder="0"
			  noresize="noresize"
			  style="height: 902px"
			>
			</iframe>
		  </body>
		</html>
		`,
	};
}

export default function Internal() {
	// eslint-disable-next-line react/no-danger
	return <div dangerouslySetInnerHTML={iframe()} />;
}
