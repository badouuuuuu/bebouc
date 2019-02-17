import * as React from "react";
import LogoBecode from "../../../../assets/logo_Becode.png";
import Logo from "../../Components/Logo";

export class Error404 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            admin: false,
            login_button: "submit-button",
            login: "Login",
            disabled_button: "",
        };
    }

    render() {
        return (
            <>
                <div className="backgoundImage" />
                <div className="login_container">
                    <section className="section_login_title">
                        <a href="/catalogue">
                            <img className="logo_login" src={LogoBecode} />
                        </a>
                        <Logo />
                    </section>
                    <br />
                    <p>{"NOT FOUND"}</p>
                </div>
            </>
        );
    }
}

export default Error404;
