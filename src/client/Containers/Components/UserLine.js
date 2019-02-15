import * as React from "react";

export class UserLine extends React.Component {
    render() {
        const isadmin = this.props.admin;

        return (
            <tr>
                <th>{this.props.email}</th>
                <td>{this.props.name}</td>
                <td>{this.props.surname}</td>
                <td>{isadmin ? "Yes" : "No"}</td>
                <td>
                    <button className="selected-button">{"Delete"}</button>
                </td>
            </tr>
        );
    }
}

export default UserLine;
