import * as React from "react";

// Components
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
            AdminMenu = <Navbar.Item href="/">{"Admin"}</Navbar.Item>;
        }

        return (
            <Navbar id="navigation" active={this.state.active}>
                <Navbar.Brand>
                    <Navbar.Item>
                        <Logo />
                    </Navbar.Item>
                    <Navbar.Burger
                        active={this.state.active}
                        onClick={this.handleClick}
                    />
                </Navbar.Brand>
                <Navbar.Menu>
                    <div className="navbar-end">
                        {AdminMenu}
                        <Navbar.Item href="/">{"Library"}</Navbar.Item>
                        <Navbar.Item href="/about">{"Account"}</Navbar.Item>
                        <Navbar.Item href="/contact">{"Logout"}</Navbar.Item>
                    </div>
                </Navbar.Menu>
            </Navbar>
        );
    }
}