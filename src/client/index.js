import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import "./app.scss";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();

// import Homepage from "./components/homepage";
//
// ReactDOM.render(<Homepage />, document.querySelector("#app"));
