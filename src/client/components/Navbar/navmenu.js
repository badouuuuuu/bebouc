import * as React from "react";

export default class NavMenu extends React.Component {
    render() {
        return (
            <div className="navbar-menu">
                <h3 className="navbar-item">{"Library"}</h3>
                <h3 className="navbar-item">{"Account"}</h3>
            </div>
        );
    }
}
