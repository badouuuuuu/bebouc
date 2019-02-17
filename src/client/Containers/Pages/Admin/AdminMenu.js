import * as React from "react";

// Components
import BooksList from "../Lists/BooksList";
import UsersList from "../Lists/UsersList";
import LoansList from "../Lists/LoansList";
import SvgUserwhite from "../../Components/Userwhite.js";
import SvgOpenMagazine from "../../Components/OpenMagazine.js";
import SvgList from "../../Components/List.js";

export class AdminMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonUsers: "secondary-button",
            buttonBooks: "secondary-button",
            buttonLoans: "secondary-button",
        };
        this.manageUsers = this.manageUsers.bind(this);
        this.manageBooks = this.manageBooks.bind(this);
        this.manageLoans = this.manageLoans.bind(this);
    }

    manageUsers() {
        this.setState({
            buttonUsers: "active-button",
            buttonBooks: "secondary-button",
            buttonLoans: "secondary-button",
        });
    }

    manageBooks() {
        this.setState({
            buttonUsers: "secondary-button",
            buttonBooks: "active-button",
            buttonLoans: "secondary-button",
        });
    }

    manageLoans() {
        this.setState({
            buttonUsers: "secondary-button",
            buttonBooks: "secondary-button",
            buttonLoans: "active-button",
        });
    }

    render() {
        let List = null;

        if (this.state.buttonUsers === "active-button") {
            List = <UsersList />;
        } else if (this.state.buttonBooks === "active-button") {
            List = <BooksList />;
        } else if (this.state.buttonLoans === "active-button") {
            List = <LoansList />;
        }

        return (
            <div className="container">
                <div className="navadmin">
                    <div className="navAdminItem">
                        <div className="navAdminpicto">
                            <SvgUserwhite />
                        </div>
                        <button
                            className={`navAdminButton ${
                                this.state.buttonUsers
                            }`}
                            onClick={this.manageUsers}>
                            {"Manage Users"}
                        </button>
                    </div>
                    <div className="navAdminItem">
                        <div className="navAdminpicto">
                            <SvgOpenMagazine />
                        </div>
                        <button
                            className={`navAdminButton ${
                                this.state.buttonBooks
                            }`}
                            onClick={this.manageBooks}>
                            {"Manage Books"}
                        </button>
                    </div>
                    <div className="navAdminItem">
                        <div className="navAdminpicto">
                            <SvgList />
                        </div>
                        <button
                            className={`navAdminButton ${
                                this.state.buttonLoans
                            }`}
                            onClick={this.manageLoans}>
                            {"Manage Loans"}
                        </button>
                    </div>
                </div>
                <div className="table-container"> {List} </div>
            </div>
        );
    }
}

export default AdminMenu;
