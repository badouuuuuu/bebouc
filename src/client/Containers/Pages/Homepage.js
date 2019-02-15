import * as React from "react";
// import axios from "axios";
import NavBar from "../Components/Navbar";
import Catalogue from "./Catalogue/Catalogue";
import HomepageAdmin from "./Admin/HomepageAdmin";

export class Homepage extends React.Component {
    state = {
        isJunior: true,
    };

    render() {
        let Display = null;

        if (this.state.isJunior) {
            Display = <Catalogue />;
        } else {
            Display = <HomepageAdmin />;
        }

        return (
            <div className="backgroundhome">
                <NavBar />
                {Display}
            </div>
        );
    }
}
