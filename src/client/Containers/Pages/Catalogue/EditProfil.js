import * as React from "react";
import axios from "axios";

export class EditProfil extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: "",
            password: "",
            confirm_password: "",
            admin: false,
            edit_button: "secondary-button",
            edit: "Edit",
            disabled_button: "",
            inputEditClass: "input_editprofil is-small",
            messageNotMatch: "",
        };
    }

    componentDidMount() {
        this.setState.email = "id@email.com";
    }

    handleChange(e) {
        let target = e.target;

        this.setState({
            [target.name]:
                target.type === "checkbox" ? target.checked : target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let iduser = "5c64540b0d7ff00016159534";

        if (this.state.password === this.state.confirm_password) {
            axios
                .put(`http://localhost/api/users/${iduser}`, {
                    email: this.state.email,
                    password: this.state.password,
                })
                .then(res => {
                    if (res.status !== 200) {
                        console.log("error");
                    } else {
                        console.log(res.data);

                        this.setState({
                            edit_button: "success-button",
                            edit: "Success",
                            messageNotMatch: "",
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                });

            setTimeout(
                () =>
                    this.setState({
                        email: "",
                        password: "",
                        confirm_password: "",
                        admin: false,
                        edit_button: "secondary-button",
                        edit: "Edit",
                        disabled_button: "",
                        inputEditClass: "input_editprofil is-small",
                        messageNotMatch: "",
                    }),
                back,
                1000,
            );
        } else {
            this.setState({
                messageNotMatch: "Passwords don't match",
                password: "",
                confirm_password: "",
            });
        }
    }

    render() {
        return (
            <>
                <div className="editprofil-component">
                    <h1>{"Redefine Your Awesome Self"}</h1>

                    <hr />
                    <svg
                        className="editprofil-image"
                        width="260"
                        height="260"
                        viewBox="0 0 260 260"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path
                                d="M130.027 45.0234C141.111 45.0234 150.096 36.038 150.096 24.954C150.096 13.8699 141.111 4.88452 130.027 4.88452C118.943 4.88452 109.957 13.8699 109.957 24.954C109.957 36.038 118.943 45.0234 130.027 45.0234Z"
                                fill="#63C3D1"
                            />
                            <path
                                d="M221.56 202.34C232.644 202.34 241.63 193.355 241.63 182.271C241.63 171.187 232.644 162.201 221.56 162.201C210.476 162.201 201.491 171.187 201.491 182.271C201.491 193.355 210.476 202.34 221.56 202.34Z"
                                fill="#63C3D1"
                            />
                            <path
                                d="M38.493 202.34C49.5771 202.34 58.5624 193.355 58.5624 182.271C58.5624 171.187 49.5771 162.201 38.493 162.201C27.409 162.201 18.4236 171.187 18.4236 182.271C18.4236 193.355 27.409 202.34 38.493 202.34Z"
                                fill="#63C3D1"
                            />
                            <path
                                d="M246.461 77.7823C246.461 64.031 235.311 52.8814 221.56 52.8814C214.074 52.8814 207.384 56.1732 202.818 61.4294L153.6 32.9181C154.45 30.4227 154.928 27.7149 154.928 24.901C154.928 11.1497 143.778 0 130.027 0C116.275 0 105.126 11.1497 105.126 24.901C105.126 27.7149 105.603 30.3696 106.453 32.865L57.2351 61.3764C52.669 56.1732 45.9792 52.8283 38.493 52.8283C24.7417 52.8283 13.592 63.9779 13.592 77.7292C13.592 89.6222 21.9808 99.6038 33.1305 102.046L33.1836 157.901C21.9808 160.343 13.5389 170.325 13.5389 182.218C13.5389 195.969 24.6886 207.119 38.4399 207.119C45.7668 207.119 52.3505 203.933 56.9165 198.889L106.294 227.4C105.497 229.843 105.073 232.391 105.073 235.099C105.073 248.85 116.222 260 129.973 260C143.725 260 154.874 248.85 154.874 235.099C154.874 232.391 154.45 229.843 153.653 227.4L203.03 198.889C207.596 203.933 214.18 207.119 221.507 207.119C235.258 207.119 246.408 195.969 246.408 182.218C246.408 170.165 237.754 160.025 226.339 157.795V102.152C237.807 99.9755 246.461 89.8877 246.461 77.7823ZM221.56 62.4913C230.002 62.4913 236.851 69.3404 236.851 77.7823C236.851 86.2242 230.002 93.0733 221.56 93.0733C213.118 93.0733 206.269 86.2242 206.269 77.7823C206.269 69.3404 213.171 62.4913 221.56 62.4913ZM130.027 9.66306C138.468 9.66306 145.318 16.5121 145.318 24.9541C145.318 27.5556 144.68 29.998 143.512 32.1748C143.406 32.281 143.353 32.3872 143.247 32.5465C143.194 32.6526 143.141 32.7588 143.088 32.865C140.433 37.2718 135.548 40.245 130.027 40.245C121.585 40.245 114.736 33.396 114.736 24.9541C114.736 16.5121 121.585 9.66306 130.027 9.66306ZM23.202 77.7823C23.202 69.3404 30.0511 62.4913 38.493 62.4913C46.9349 62.4913 53.784 69.3404 53.784 77.7823C53.784 86.2242 46.9349 93.0733 38.493 93.0733C30.0511 93.0733 23.202 86.2242 23.202 77.7823ZM38.493 197.562C30.0511 197.562 23.202 190.713 23.202 182.271C23.202 173.829 30.0511 166.98 38.493 166.98C46.9349 166.98 53.784 173.829 53.784 182.271C53.7309 190.713 46.8818 197.562 38.493 197.562ZM130.027 250.39C121.585 250.39 114.736 243.541 114.736 235.099C114.736 226.657 121.585 219.808 130.027 219.808C138.468 219.808 145.318 226.657 145.318 235.099C145.318 243.541 138.468 250.39 130.027 250.39ZM148.981 219.012C144.415 213.649 137.619 210.198 130.027 210.198C122.434 210.198 115.638 213.596 111.072 219.012L61.9073 190.66C62.863 188.058 63.3939 185.191 63.3939 182.271C63.3939 170.006 54.5273 159.812 42.8467 157.741L42.7936 102.259C54.4742 100.241 63.3939 89.9939 63.3939 77.7292C63.3939 74.9153 62.9161 72.2075 62.0666 69.7121L111.284 41.2007C115.851 46.457 122.593 49.7488 130.08 49.7488C137.566 49.7488 144.256 46.457 148.822 41.2007L198.04 69.7121C197.19 72.2075 196.712 74.9153 196.712 77.7292C196.712 89.7815 205.367 99.9224 216.782 102.152V157.795C205.367 160.025 196.712 170.112 196.712 182.218C196.712 185.191 197.243 188.005 198.199 190.606L148.981 219.012ZM236.851 182.271C236.851 190.713 230.002 197.562 221.56 197.562C213.118 197.562 206.269 190.713 206.269 182.271C206.269 173.829 213.118 166.98 221.56 166.98C230.002 166.98 236.851 173.829 236.851 182.271Z"
                                fill="black"
                            />
                            <path
                                d="M153.229 149.246V131.885C156.149 129.071 157.795 125.195 157.795 121.054V98.2764C157.795 84.3127 146.433 72.9507 132.469 72.9507H127.584C113.621 72.9507 102.259 84.3127 102.259 98.2764V121.054C102.259 125.195 103.958 129.071 106.825 131.885V149.246C101.303 152.113 88.0295 159.387 75.6056 169.581C73.5349 171.28 73.2694 174.307 74.9684 176.377C76.6674 178.448 79.6938 178.713 81.7644 177.014C95.5157 165.705 110.382 158.219 113.249 156.839C115.267 155.83 116.488 153.866 116.488 151.582V129.602C116.488 128.009 115.691 126.469 114.364 125.62C112.824 124.611 111.922 122.912 111.922 121.054V98.2764C111.922 89.6221 118.983 82.5607 127.637 82.5607H132.522C141.176 82.5607 148.238 89.6221 148.238 98.2764V121.054C148.238 122.859 147.335 124.558 145.795 125.62C144.468 126.522 143.672 128.009 143.672 129.602V151.582C143.672 153.812 144.946 155.83 146.964 156.839C149.831 158.219 164.697 165.759 178.448 177.014C179.351 177.758 180.413 178.129 181.474 178.129C182.855 178.129 184.235 177.545 185.191 176.377C186.89 174.307 186.571 171.28 184.554 169.581C172.024 159.387 158.75 152.06 153.229 149.246Z"
                                fill="black"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="260" height="260" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <div className="editprofil_block">
                        <form onSubmit={this.handleSubmit}>
                            <i className="far fa-envelope icon-input-field" />

                            <label id="icon-input-field" htmlFor="email" />
                            <input
                                className={this.state.inputEditClass}
                                type="text"
                                name="email"
                                id="email"
                                placeholder="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                required
                            />

                            <br />
                            <br />
                            <i className="fas fa-key icon-input-field" />
                            <label id="icon-input-field" htmlFor="password" />
                            <input
                                className={this.state.inputEditClass}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                required
                            />

                            <br />
                            <br />
                            <i className="fas fa-key icon-input-field" />
                            <label id="icon-input-field" htmlFor="password" />
                            <input
                                className={this.state.inputEditClass}
                                type="password"
                                name="confirm_password"
                                id="confirm_password"
                                placeholder="Confirm password"
                                value={this.state.confirm_password}
                                onChange={this.handleChange}
                                required
                            />
                            <br />
                            <br />

                            <button
                                disabled={
                                    !this.state.email && !this.state.password
                                }
                                type="submit"
                                className={this.state.edit_button}>
                                {this.state.edit}
                            </button>
                        </form>
                        <p className="error">{this.state.messageNotMatch}</p>
                    </div>
                    <br />

                    <a className="back-button" href="/">
                        {" "}
                        <button className="submit-button">{"Back"}</button>{" "}
                    </a>
                </div>
            </>
        );
    }
}
