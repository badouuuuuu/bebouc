import * as React from "react";
import axios from "axios";

import LoanLine from "../../Components/LoanLine";

export default class LoansList extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        const displayEachLoanLine = this.state.loans.map((loan, i) => {
            let index = i + 1;

            return (
                <LoanLine
                    index={index}
                    key={loan._id}
                    book={loan.bookID}
                    borrower={loan.borrowerID}
                    date={loan.updatedAt}
                />
            );
        });

        return (
            <>
                <form action="/addloan" method="get">
                    <button className="submit-button">{"New Loan"}</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Book"}</th>
                            <th>{"User"}</th>
                            <th>{"Date"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{displayEachLoanLine}</tbody>
                </table>
            </>
        );
    }
}
