import * as React from "react";
// import axios from "axios";
import NavBar from "../Components/Navbar";
import Catalogue from "./Catalogue/Catalogue";
import AdminMenu from "./Admin/AdminMenu";

export class Homepage extends React.Component {
    state = {
        isJunior: false,
    };

    render() {
        let Display = null;

        if (this.state.isJunior) {
            Display = <Catalogue />;
        } else {
            Display = <AdminMenu />;
        }

        return (
            <div className="backgroundhome">
                <NavBar />
                {Display}
            </div>
        );
    }
}
