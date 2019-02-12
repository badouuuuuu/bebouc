import * as React from "react";
import axios from "axios";
import NavCatalogue from "./NavCatalogue";
import NavBar from "../../../components/navbar";

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
                <NavBar />
                <small>{"Laura, Olivier, Youssef, Elias"}</small>
                <form action="/addbooks" method="get">
                    <button className="primary-button">{"Books"}</button>
                </form>

                <NavCatalogue />
            </div>
        );
    }
}
