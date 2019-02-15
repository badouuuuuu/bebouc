import * as React from "react";

export class LoanLine extends React.Component {
    render() {
        return (
            <tr>
                <th>{this.props.book}</th>
                <th>{this.props.borrower}</th>
                <td>{this.props.date}</td>
                <td>
                    <button className="secondary-button">{"Edit"}</button>
                    <button className="selected-button">{"Delete"}</button>
                </td>
            </tr>
        );
    }
}

export default LoanLine;
