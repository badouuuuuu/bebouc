import * as React from "react";
import ReactDOM from "react-dom";

import {library} from "@fortawesome/fontawesome-svg-core";
import {faTag} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

library.add(faTag);
library.add(faSearch);

// Style
import "./app.scss";
// import "bulma/css/bulma.css";

import Main from "./components/main";

ReactDOM.render(<Main />, document.querySelector("#app"));

/* UTILISER CE FICHIER EN ATTENDANT LUNDI si vous travaillez le weekend sur le front, a renomme en api.js ou a copie
dans l'app.js existant */
