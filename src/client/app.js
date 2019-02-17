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
import axios from "axios";

import "./scss/app.scss";

// import {devpage} from "./Containers/Pages/Authentification/devpage";

library.add(faTag);
library.add(faSearch);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false,
        };
    }

    componentWillMount() {
        axios
            .get("http://localhost/api/auth")
            .then(response => {
                console.log(response.data);

                if (response.status === 200) {
                    this.setState({
                        auth: true,
                    });
                } else {
                    this.setState({
                        auth: false,
                    });
                }
            })
            .then(error => {
                console.log(error);
            });
    }

    render() {
        let RoutingAuth = "";

        if (this.state.auth) {
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
