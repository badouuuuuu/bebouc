import * as React from "react";
// import axios from "axios";
import HomepageAdmin from "./Admin/HomepageAdmin";
import HomepageJunior from "./Catalogue/HomepageJunior";

let Display = null;

export class Homepage extends React.Component {
    componentWillMount() {
        if (this.props.isJunior) {
            Display = <HomepageJunior />;
        } else {
            Display = <HomepageAdmin />;
        }
    }
    render() {
        return <div className="backgroundhome">{Display}</div>;
    }
}
