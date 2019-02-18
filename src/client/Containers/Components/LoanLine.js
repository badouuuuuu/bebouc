import * as React from "react";
import DeleteModal from "./DeleteModal";
import axios from "axios";

export class LoanLine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showmodal: "",
            borrower: "",
            booktitle: "",
            date: this.props.date,
            active: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        this.setState({showModal: ""});
    }

    handleDelete = event => {
        event.preventDefault();
        axios
            .delete(`http://localhost/api/books/${this.props.loanid}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentWillMount() {
        // Retrieving the book data for each loan
        axios.get("http://localhost/api/books").then(res => {
            res.data.map(book => {
                if (book._id === this.props.book) {
                    this.setState({
                        booktitle: book.title,
                    });
                }
            });
        });

        // Retrieving borrower data for each loan
        axios.get(`http://localhost/api/users`).then(res => {
            res.data.map(user => {
                if (user._id === this.props.borrower) {
                    this.setState({
                        borrower: user.name,
                    });
                }
            });
        });

        // Getting Loan data and updating state
        if (this.props.active) {
            this.setState({
                active: "Yes",
            });
        } else {
            this.setState({
                active: "No",
            });
        }
    }

    render() {
        return (
            <tr>
                <th>{this.state.booktitle}</th>
                <th>{this.state.borrower}</th>
                <td>{this.state.date}</td>
                <td>{this.state.active}</td>
                <td>
                    <button className="secondary-button">{"Edit"}</button>
                    <button
                        className="selected-button"
                        onClick={this.handleClick}>
                        {"Delete"}
                    </button>
                </td>
                <DeleteModal
                    name={"a loan"}
                    closeModal={this.handleClose}
                    show={this.state.showModal}
                    title={`the loan of ${this.props.book} by ${
                        this.props.borrower
                    }`}
                    delete={this.handleDelete}
                />
            </tr>
        );
    }
}

export default LoanLine;
