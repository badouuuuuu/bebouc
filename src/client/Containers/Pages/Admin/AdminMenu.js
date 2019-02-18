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
            showPicto: true,
        };
        this.manageUsers = this.manageUsers.bind(this);
        this.manageBooks = this.manageBooks.bind(this);
        this.manageLoans = this.manageLoans.bind(this);
    }

    manageUsers() {
        if (this.state.buttonUsers === "secondary-button") {
            this.setState({
                buttonUsers: "active-button",
                buttonBooks: "secondary-button",
                buttonLoans: "secondary-button",
                showPicto: false,
            });
        } else {
            this.setState({
                buttonUsers: "secondary-button",
                buttonBooks: "secondary-button",
                buttonLoans: "secondary-button",
                showPicto: true,
            });
        }
    }

    manageBooks() {
        if (this.state.buttonBooks === "secondary-button") {
            this.setState({
                buttonUsers: "secondary-button",
                buttonBooks: "active-button",
                buttonLoans: "secondary-button",
                showPicto: false,
            });
        } else {
            this.setState({
                buttonUsers: "secondary-button",
                buttonBooks: "secondary-button",
                buttonLoans: "secondary-button",
                showPicto: true,
            });
        }
    }

    manageLoans() {
        if (this.state.buttonLoans === "secondary-button") {
            this.setState({
                buttonUsers: "secondary-button",
                buttonBooks: "secondary-button",
                buttonLoans: "active-button",
                showPicto: false,
            });
        } else {
            this.setState({
                buttonUsers: "secondary-button",
                buttonBooks: "secondary-button",
                buttonLoans: "secondary-button",
                showPicto: true,
            });
        }
    }

    render() {
        // Display the appropriate List according to the right Button click
        let List = null,
            PictoUsers = "",
            PictoBooks = "",
            PictoLoans = "";

        if (this.state.buttonUsers === "active-button") {
            List = <UsersList />;
        } else if (this.state.buttonBooks === "active-button") {
            List = <BooksList />;
        } else if (this.state.buttonLoans === "active-button") {
            List = <LoansList />;
        }

        //  Display or hide menu item pictures whether a list is displayed or not

        if (this.state.showPicto) {
            PictoUsers = (
                <div className="navAdminpicto">
                    <SvgUserwhite />
                </div>
            );
            PictoBooks = (
                <div className="navAdminpicto">
                    <SvgOpenMagazine />
                </div>
            );
            PictoLoans = (
                <div className="navAdminpicto">
                    <SvgList />
                </div>
            );
        } else {
            PictoUsers = "";
            PictoBooks = "";
            PictoLoans = "";
        }

        return (
            <div className="container">
                <div className="navadmin">
                    <div className="navAdminItem">
                        {PictoUsers}
                        <button
                            className={`navAdminButton ${
                                this.state.buttonUsers
                            }`}
                            onClick={this.manageUsers}>
                            {"Manage Users"}
                        </button>
                    </div>
                    <div className="navAdminItem">
                        {PictoBooks}
                        <button
                            className={`navAdminButton ${
                                this.state.buttonBooks
                            }`}
                            onClick={this.manageBooks}>
                            {"Manage Books"}
                        </button>
                    </div>
                    <div className="navAdminItem">
                        {PictoLoans}
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
