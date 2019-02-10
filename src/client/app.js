import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch} from "react-router-dom";
import {Homepage} from "./components/Homepage";
import {Login} from "./components/authentification/Login";
import {Signup} from "./components/authentification/Signup";
import {PrivateRoute} from "./components/PrivateRoute";
import {RegisterTest} from "./components/authentification/RegisiterTest";
import "./scss/app.scss";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/signup" component={Signup} />
                        <Route exact path="/test" component={Homepage} />
                        <Route
                            exact
                            path="/RegisterTest"
                            component={RegisterTest}
                        />
                        <PrivateRoute path="/homepage" component={Homepage} />
                    </Switch>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app"),
);
// registerServiceWorker();
