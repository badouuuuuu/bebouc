import * as React from "react";
import axios from "axios";
import NavCatalogue from "./NavCatalogue";
import NavBar from "../../Components/navbar";
import NavActions from "../../Components/navactions";

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
                <NavActions />
                <NavCatalogue />
            </div>
        );
    }
}
