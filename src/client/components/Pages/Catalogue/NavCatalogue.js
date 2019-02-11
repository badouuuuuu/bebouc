import * as React from "react";
import "../../../scss/app.scss";
import {FontAwesomeIcon} from "../../../../../node_modules/@fortawesome/react-fontawesome";

export default class NavCatalogue extends React.Component {
    render() {
        return (
            <div className="NavCatalogue">
                <div className="dropdown is-hoverable is-up is-right">
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

                <div className="field has-addons">
                    <div className="control">
                        <input
                            className="inputsearch"
                            type="text"
                            placeholder="Find a freaking book"
                        />
                    </div>
                    <div className="control">
                        <a className="button is-info">
                            <span className="icon">
                                <FontAwesomeIcon icon="search" />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
