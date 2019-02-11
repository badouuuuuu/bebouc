import * as React from "react";
import axios from "axios";
import NavCatalogue from "./Catalogue/NavCatalogue.js";

export class Homepage extends React.Component {
    state = {
        persons: [],
    };
    componentDidMount() {
        // Requetfaite pour tester
        axios.get(`http://localhost/api`).then(res => {
            const persons = res.data;

            this.setState({persons});
            console.log(persons);
        });
    }

    render() {
        return (
            <div className="backgroundhome">
                <h1>{"Bebouc"}</h1>
                <hr />
                <small>{"Laura, Olivier, Youssef, Elias"}</small>
                <form action="/addbooks" method="get">
                    <button className="primary-button">{"Books"}</button>
                </form>

                <NavCatalogue />
            </div>
        );
    }
}
