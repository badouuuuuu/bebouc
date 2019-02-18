import * as React from "react";
import Logo from "./Logo";
import {Navbar} from "react-bulma-components/full";

export class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isJunior: false,
            active: false,
            AdminActive: "button-is-active",
            CatalogueActive: null,
            AccountActive: null,
        };
    }

    handleClickBurger = () => {
        const {active} = this.state;

        this.setState({active: !active});
    };

    handleClickAdmin = () => {
        this.setState({
            AdminActive: "button-is-active",
            CatalogueActive: null,
            AccountActive: null,
        });
    };

    handleClickCatalogue = () => {
        this.setState({
            AdminActive: null,
            CatalogueActive: "button-is-active",
            AccountActive: null,
        });
    };

    handleClickAccount = () => {
        this.setState({
            AdminActive: null,
            CatalogueActive: null,
            AccountActive: "button-is-active",
        });
    };

    render() {
        let AdminMenu = null;

        if (this.props.isJunior) {
            AdminMenu = (
                <Navbar.Item href="/admin" onClick={this.handleClickAdmin}>
                    {" "}
                    <p className="colorNavCat" id={this.state.AdminActive}>
                        {"Admin"}{" "}
                    </p>
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
                        onClick={this.handleClickBurger}
                    />
                </Navbar.Brand>
                <Navbar.Menu>
                    <div className="navbar-start">
                        {AdminMenu}
                        <Navbar.Item
                            href="/catalogue"
                            onClick={this.handleClickCatalogue}>
                            <p
                                className="colorNavCat"
                                id={this.state.CatalogueActive}>
                                {"Catalogue"}{" "}
                            </p>
                        </Navbar.Item>
                        <Navbar.Item
                            href="/editprofil"
                            onClick={this.handleClickAccount}>
                            <p
                                className="colorNavCat"
                                id={this.state.AccountActive}>
                                {"Account"}{" "}
                            </p>
                        </Navbar.Item>
                    </div>
                    <div className="navbar-end">
                        <Navbar.Item onClick={this.props.isLogout}>
                            <p className="colorNavCat">{"Logout"} </p>
                        </Navbar.Item>
                    </div>
                </Navbar.Menu>
            </Navbar>
        );
    }
}

export default NavBar;
