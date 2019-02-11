import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch} from "react-router-dom";
import {Homepage} from "./components/Homepage";
import {Login} from "./components/authentification/Login";
import {Signup} from "./components/authentification/Signup";
import {PrivateRoute} from "./components/PrivateRoute";
import {AddBooks} from "./components/addbooks";
import {RegisterTest} from "./components/authentification/RegisiterTest";

import "./scss/app.scss";

// library FontAwesomeIcon
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
library.add(faTag);
library.add(faSearch);

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/addbooks" component={AddBooks} />
                        <Route exact path="/signup" component={Signup} />
                        <Route
                            exact
                            path="/homepagetest"
                            component={Homepage}
                        />{" "}
                        {/* Pour l'integration d'Olivier*/}
                        <Route
                            exact
                            path="/RegisterTest"
                            component={RegisterTest}
                        />{" "}
                        {/* Route pour test Create User*/}
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
