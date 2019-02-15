import * as React from "react";
import axios from "axios";
import UserLine from "../../Components/UserLine";

export default class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/users`).then(res => {
            const users = res.data;

            this.setState({users});
            console.log(users);
        });
    }

    render() {
        const displayEachUserLine = this.state.users.map((user, i) => {
            let index = i + 1;

            return (
                <UserLine
                    index={index}
                    key={user._id}
                    userid={user._id}
                    name={user.name}
                    surname={user.surname}
                    admin={user.admin}
                    email={user.email}
                />
            );
        });

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
                    <tbody>{displayEachUserLine}</tbody>
                </table>
            </>
        );
    }
}
