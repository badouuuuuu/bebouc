import * as React from "react";
// import axios from "axios";

export default class LoansList extends React.Component {
    render() {
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
                    <tbody>
                        <tr>
                            <th>{"1"}</th>
                            <td>{"a"}</td>
                            <td>{"38"}</td>
                            <td>
                                <button className="secondary-button">
                                    {"Edit"}
                                </button>
                                <button className="selected-button">
                                    {"Delete"}
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </>
        );
    }
}
