import * as React from "react";

// Components
import NavBar from "./Navbar/navbar";

export default class Main extends React.Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="container"> {"BODY"} </div>
                <footer> {"FOOTER"} </footer>
            </>
        );
    }
}
