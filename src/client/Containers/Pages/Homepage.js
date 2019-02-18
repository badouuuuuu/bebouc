import * as React from "react";
// import axios from "axios";
import HomepageAdmin from "./Admin/HomepageAdmin";
import HomepageJunior from "./Catalogue/HomepageJunior";
import axios from "axios";

export class Homepage extends React.Component {
    state = {
        isAdmin: false,
    };

    componentWillMount() {
        axios
            .get("http://localhost/api/auth")
            .then(response => {
                console.log(response.data);

                if (response.data.admin === true) {
                    this.setState({
                        isAdmin: false,
                    });
                } else {
                    this.setState({
                        isAdmin: true,
                    });
                }
            })
            .then(error => {
                console.log(error);
            });
    }

    render() {
        let Display = null;

        if (this.state.isAdmin) {
            Display = <HomepageJunior />;
        } else {
            Display = <HomepageAdmin />;
        }

        return <div className="backgroundhome">{Display}</div>;
    }
}
