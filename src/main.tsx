import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppBar from "./views/AppBar/AppBar";
import GeneralInfo from "./views/GeneralInfo/GeneralInfo";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<AppBar language='' />
		<GeneralInfo />
	</React.StrictMode>
);
