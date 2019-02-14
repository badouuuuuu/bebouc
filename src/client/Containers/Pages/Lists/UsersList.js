import * as React from "react";
// import axios from "axios";

export default class UsersList extends React.Component {
    render() {
        return (
            <>
                <form action="/Register" method="get">
                    <button className="submit-button">{"New User"}</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Email"}</th>
                            <th>{"Name"}</th>
                            <th>{"Surname"}</th>
                            <th>{"Admin"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>{"1"}</th>
                            <td>{"a"}</td>
                            <td>{"38"}</td>
                            <td>{"23"}</td>
                            <td>
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
