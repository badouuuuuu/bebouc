import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import registerServiceWorker from "./registerServiceWorker";
import {Route, Switch} from "react-router-dom";
import {PrivateRoute} from "./Containers/Pages/Redirection/PrivateRoute";
import {Login} from "./Containers/Pages/Authentification/Login";
import {Register} from "./Containers/Pages/Authentification/Register";
import {Homepage} from "./Containers/Pages/Homepage";
import {AddBook} from "./Containers/Pages/Catalogue/AddBook";
import {AddLoan} from "./Containers/Pages/Catalogue/AddLoan";
import {EditProfil} from "./Containers/Pages/Catalogue/EditProfil";
import {NavBar} from "./Containers/Components/Navbar";
import {Catalogue} from "./Containers/Pages/Catalogue/Catalogue";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./scss/app.scss";

// import {devpage} from "./Containers/Pages/Authentification/devpage";

library.add(faTag);
library.add(faSearch);

class App extends Component {
    render() {
        let auth = true,
            RoutingAuth = "";

        if (auth) {
            RoutingAuth = (
                <>
                    <div className="App">
                        <div className="App-content">
                            <NavBar />
                            <Switch>
                                <Route exact path="/" component={Homepage} />
                                <Route
                                    exact
                                    path="/addbook"
                                    component={AddBook}
                                />
                                <Route
                                    exact
                                    path="/addloan"
                                    component={AddLoan}
                                />
                                <Route
                                    exact
                                    path="/catalogue"
                                    component={Catalogue}
                                />
                                <Route
                                    exact
                                    path="/editprofil"
                                    component={EditProfil}
                                />
                                <Route
                                    exact
                                    path="/admin"
                                    component={Homepage}
                                />
                                <Route
                                    exact
                                    path="/Register"
                                    component={Register}
                                />
                                <PrivateRoute
                                    path="/homepage"
                                    component={Homepage}
                                />
                                <Route
                                    exact
                                    path="*"
                                    component={() => "404 NOT FOUND"}
                                />
                            </Switch>
                        </div>
                    </div>
                </>
            );
        } else {
            RoutingAuth = (
                <>
                    <Route exact path="/" component={Login} />
                </>
            );
        }

        return <div className="App">{RoutingAuth}</div>;
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app"),
);
// registerServiceWorker();
