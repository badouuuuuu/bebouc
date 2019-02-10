import * as React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import "./app.scss";

class Main extends React.Component {
    render() {
        return (
            <div>
                <App />
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById("app"),
);

registerServiceWorker();
