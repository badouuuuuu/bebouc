import * as React from "react";
import AdminMenu from "./AdminMenu.js";

export class HomepageAdmin extends React.Component {
    render() {
        return (
            <div className="backgroundhome">
                <div className="navAdminMenu">
                    <AdminMenu />
                </div>
            </div>
        );
    }
}

export default HomepageAdmin;
