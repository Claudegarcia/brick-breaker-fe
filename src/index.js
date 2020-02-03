import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import App from "./App";

//health check
axios.get("http://localhost:5000/ping").then(() => { console.log("working") }).catch(() => { console.log("not working") });

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
