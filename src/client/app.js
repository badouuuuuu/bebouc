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
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import "./scss/app.scss";
// import {devpage} from "./Containers/Pages/Authentification/devpage";

library.add(faTag);
library.add(faSearch);

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-content">
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/addbook" component={AddBook} />
                        <Route exact path="/addloan" component={AddLoan} />
                        <Route
                            exact
                            path="/editprofil"
                            component={EditProfil}
                        />
                        {/* Pour l'integration d'Olivier*/}
                        <Route exact path="/Register" component={Register} />
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
