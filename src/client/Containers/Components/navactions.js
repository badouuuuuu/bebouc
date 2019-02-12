import * as React from "react";

export default class NavActions extends React.Component {
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
        return (
            <div className="navactions">
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
        );
    }
}
