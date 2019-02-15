import * as React from "react";
import "../../../scss/app.scss";
import AdminMenu from "./AdminMenu.js";
import Navbar from "../../Components/Navbar.js";
import SvgUserwhite from "../../Components/Userwhite.js";
import SvgOpenMagazine from "../../Components/OpenMagazine.js";
import SvgList from "../../Components/List.js";

export class HomepageAdmin extends React.Component {
    render() {
        return (
            <div className="backgroundhome">
                <Navbar />

                <div className="navAdminpicto">
                    <SvgUserwhite />
                    <SvgOpenMagazine />
                    <SvgList />
                </div>
                <div className="navAdminMenu">
                    <AdminMenu />
                </div>
            </div>
        );
    }
}

export default HomepageAdmin;
