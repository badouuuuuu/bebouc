import * as React from "react";
import Logo from "./Logo";
import {Navbar} from "react-bulma-components/full";

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJunior: false,
            active: false,
        };
    }

    handleClick = () => {
        const {active} = this.state;

        this.setState({active: !active});
    };

    render() {
        let AdminMenu = null;

        if (!this.state.isJunior) {
            AdminMenu = (
                <Navbar.Item href="/admin">
                    {" "}
                    <p className="colorAdmin">{"Admin"} </p>
                </Navbar.Item>
            );
        }

        return (
            <Navbar id="navigation" active={this.state.active}>
                <Navbar.Brand>
                    <div className="logoNav">
                        <Logo />
                    </div>

                    <Navbar.Burger
                        active={this.state.active}
                        onClick={this.handleClick}
                    />
                </Navbar.Brand>
                <Navbar.Menu>
                    <div className="navbar-start">
                        {AdminMenu}
                        <Navbar.Item href="/catalogue">
                            <p className="colorNavCat">{"Catalogue"} </p>
                        </Navbar.Item>
                        <Navbar.Item href="/editprofil">
                            <p className="colorNavCat">{"Account"} </p>
                        </Navbar.Item>
                    </div>
                    <div className="navbar-end">
                        <Navbar.Item href="/login">
                            <p className="colorNavCat">{"Logout"} </p>
                        </Navbar.Item>
                    </div>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default NavBar;
