import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./components/Pages/Redirection/PrivateRoute";
import {Login} from "./components/Pages/Authentification/Login";
import {Register} from "./components/Pages/Authentification/Register";
import {Homepage} from "./components/Pages/Catalogue/Homepage";
import {AddBooks} from "./components/Pages/Catalogue/AddBooks";

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
                        <Route
                            exact
                            path="/homepagetest"
                            component={Homepage}
                        />{" "}
                        {/* Pour l'integration d'Olivier*/}
                        <Route
                            exact
                            path="/Register"
                            component={Register}
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
