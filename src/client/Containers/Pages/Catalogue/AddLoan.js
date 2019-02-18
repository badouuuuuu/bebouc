import * as React from "react";
import axios from "axios";

export class AddLoan extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            loans: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/loans`).then(res => {
            const loans = res.data;

            this.setState({loans});
            console.log(loans);
        });
    }

    handleChange(e) {
        let target = e.target;

        this.setState({
            [target.name]:
                target.type === "checkbox" ? target.checked : target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`http://localhost/api/loans`, {
                bookID: this.state.bookID,
                borrowerID: this.state.borrowerID,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("Already loan");
                } else {
                    this.setState(prevState => {
                        return {
                            loans: [...prevState.loans, res.data],
                        };
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <section className="section_addusers_title">
                        <h1 className="addusers_title"> {" Add a loan"} </h1>{" "}
                    </section>{" "}
                    <div className="adduser-component">
                        <form onSubmit={this.handleSubmit}>
                            <label id="icon-input-field" htmlFor="title" />
                            <input
                                className="input is-info is-small"
                                type="text"
                                name="Book"
                                id="Book"
                                placeholder="Book title"
                                value={this.state.bookID}
                                onChange={this.handleChange}
                                required
                            />
                            <br />

                            <label id="icon-input-field" htmlFor="borrower" />
                            <input
                                className="input is-info is-small"
                                type="text"
                                name="borrower"
                                id="borrower"
                                placeholder="Borrower"
                                value={this.state.borrowerID}
                                onChange={this.handleChange}
                                required
                            />
                            <br />

                            <label id="icon-input-field" htmlFor="date" />
                            <input
                                className="input is-info is-small"
                                type="text"
                                name="date"
                                id="date"
                                placeholder="Date"
                                value={this.state.isbn}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <br />

                            <button type="submit" className="primary-button">
                                {"Add a loan"}
                            </button>
                        </form>
                        <br />

                        <hr />
                        <br />

                        <a href="/">
                            {" "}
                            <button type="submit" className="secondary-button">
                                {"Back"}
                            </button>
                        </a>
                    </div>
                </div>

                <button
                    onClick={this.props.close}
                    className="modal-close is-large"
                    aria-label="close"
                />
            </div>
        );
    }
}

export default AddLoan;
