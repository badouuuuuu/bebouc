import * as React from "react";
import "../../scss/app.scss";
import {FontAwesomeIcon} from "../../../../node_modules/@fortawesome/react-fontawesome";

export default class NavCatalogue extends React.Component {
    render() {
        return (
            <div>
                <div className="dropdown is-hoverable">
                    <div className="dropdown-trigger">
                        <button
                            className="button is-text"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4">
                            <span className="icon">
                                <FontAwesomeIcon icon="tag" />
                            </span>

                            <span>{"Tags"}</span>
                        </button>
                    </div>
                    <div
                        className="dropdown-menu"
                        id="dropdown-menu4"
                        role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item">
                                <p> {"All the tags"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="icon">
                    <FontAwesomeIcon icon="search" />
                </span>
            </div>
        );
    }
}
