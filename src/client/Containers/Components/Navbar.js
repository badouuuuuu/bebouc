import * as React from "react";
import Logo from "./Logo";
import {Navbar} from "react-bulma-components/full";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJunior: false,
        };
    }

    state = {active: false};

    handleClick = () => {
        const {active} = this.state;

        this.setState({active: !active});
    };

    render() {
        let AdminMenu = null;

        if (!this.state.isJunior) {
            AdminMenu = (
                <button className="buttonNavadmin" href="/">
                    {"Admin"}
                </button>
            );
        }

        return (
            <Navbar
                className="navbarstyle"
                id="navigation"
                active={this.state.active}>
                <Navbar.Brand>
                    <Navbar.Item>
                        <Logo />
                    </Navbar.Item>
                    <Navbar.Burger
                        active={this.state.active}
                        onClick={this.handleClick}
                    />
                </Navbar.Brand>
                <Navbar.Menu className="MenuNav">
                    <div className="navbar-end">
                        {AdminMenu}
                        <button className="navbar-item buttonNav" href="/">
                            {"Library"}{" "}
                        </button>
                        <button className="navbar-item buttonNav" href="/about">
                            {"Account"}
                        </button>
                        <button
                            className="navbar-item buttonNavlogout"
                            href="/contact">
                            {"Logout"}
                        </button>
                    </div>
                </Navbar.Menu>
            </Navbar>
        );
    }
}
