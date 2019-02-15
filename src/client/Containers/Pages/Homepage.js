import * as React from "react";
// import axios from "axios";
import HomepageAdmin from "./Admin/HomepageAdmin";
import HomepageJunior from "./Catalogue/HomepageJunior";

export class Homepage extends React.Component {
    state = {
        isJunior: false,
    };

    render() {
        let Display = null;

        if (this.state.isJunior) {
            Display = <HomepageJunior />;
        } else {
            Display = <HomepageAdmin />;
        }

        return <div className="backgroundhome">{Display}</div>;
    }
}
