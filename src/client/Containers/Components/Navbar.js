import * as React from "react";

// Components
import Logo from "./Logo";

export default class NavBar extends React.Component {
    ComponentDidMount() {
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0,
        );

        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }
    }

    render() {
        return (
            <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/homepage">
                        <Logo />
                    </a>

                    <a
                        role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="nav-toggle">
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div id="nav-toggle" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item">{"Library"}</a>
                        <a className="navbar-item">{"Account"}</a>
                        <a className="navbar-item">{"Logout"}</a>
                    </div>
                </div>
            </nav>
        );
    }
}
