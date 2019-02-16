import * as React from "react";
import AdminMenu from "./AdminMenu.js";
import SvgUserwhite from "../../Components/Userwhite.js";
import SvgOpenMagazine from "../../Components/OpenMagazine.js";
import SvgList from "../../Components/List.js";

export class HomepageAdmin extends React.Component {
    render() {
        return (
            <div className="backgroundhome">
                <a className="back-button" href="/catalogue">
                    {" "}
                    <button className="submit-button">{"Back"}</button>{" "}
                </a>

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
