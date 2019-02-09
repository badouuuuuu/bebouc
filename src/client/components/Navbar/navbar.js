import * as React from "react";

// Components
import Logo from "./logo";
import NavMenu from "./navmenu";

export default class NavBar extends React.Component {
    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation">
                <Logo />
                <NavMenu />
            </nav>
        );
    }
}
