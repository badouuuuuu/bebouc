import * as React from "react";
import axios from "axios";

export class Homepage extends React.Component {
    state = {
        persons: [],
    };
    componentDidMount() {
        axios.get(`http://localhost/api`).then(res => {
            const persons = res.data;

            this.setState({persons});
        });
    }

    render() {
        return (
            <div className="backgroundhome">
                <h1>{"Bebouc"}</h1>
                <hr />
                <small>{"Laura, Olivier, Youssef, Elias"}</small>
                <form action="/books" method="get">
                    <button className="primary-button">{"Books"}</button>
                </form>
                <ul>
                    {this.state.persons.map(person => (
                        <li key={person.id}>{person.name}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
