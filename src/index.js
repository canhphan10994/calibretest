import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import DesPage from "./script/Component/DesPage.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<DesPage />, document.getElementById("root"));

serviceWorker.unregister();
