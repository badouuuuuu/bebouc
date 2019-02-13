import * as React from "react";
// import axios from "axios";

export default class UsersList extends React.Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>{"Title"}</th>
                        <th>{"Author"}</th>
                        <th>{"ISBN"}</th>
                        <th>{"Language"}</th>
                        <th>{"Owner"}</th>
                        <th>{"Type"}</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>{"1"}</th>
                        <td>{"a"}</td>
                        <td>{"38"}</td>
                        <td>{"23"}</td>
                        <td>{"12"}</td>
                        <td>{"3"}</td>
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
        );
    }
}
