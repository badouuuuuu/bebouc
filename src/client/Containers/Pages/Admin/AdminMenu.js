import * as React from "react";

// Components
import BooksList from "../Lists/BooksList";
import UsersList from "../Lists/UsersList";
import LoansList from "../Lists/LoansList";

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
                    <button
                        className={this.state.buttonUsers}
                        onClick={this.manageUsers}>
                        {"Manage Users"}
                    </button>
                    <button
                        className={this.state.buttonBooks}
                        onClick={this.manageBooks}>
                        {"Manage Books"}
                    </button>
                    <button
                        className={this.state.buttonLoans}
                        onClick={this.manageLoans}>
                        {"Manage Loans"}
                    </button>
                </div>
                <div className="table-container"> {List} </div>
            </div>
        );
    }
}

export default AdminMenu;
