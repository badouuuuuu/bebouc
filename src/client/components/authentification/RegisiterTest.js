import * as React from "react";
import axios from "axios";

export class RegisterTest extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: "",
            surname: "",
            email: "",
            password: "",
            admin: false,
        };
    }

    handleChange(e) {
        let target = e.target,
            value = target.type === "checkbox" ? target.checked : target.value,
            name = target.name,
            surname = target.surname,
            email = target.email,
            password = target.password,
            admin = target.admin;

        this.setState({
            [email]: value,
            [password]: value,
            [name]: value,
            [surname]: value,
            [admin]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.admin);
        axios
            .post(`http://localhost/api/create`, {
                email: this.state.email,
                password: this.state.password,
                name: this.state.name,
                surname: this.state.surname,
                admin: this.state.admin,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("Email déjà existante");
                } else {
                    console.log(res.data);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label id="icon" htmlFor="email" />
                    <input
                        className="input is-primary is-small"
                        type="text"
                        name="email"
                        id="email"
                        placeholder="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="name" />
                    <input
                        className="input is-primary is-small"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="surname" />
                    <input
                        className="input is-primary is-small"
                        type="text"
                        name="surname"
                        id="surname"
                        placeholder="Surname"
                        value={this.state.surname}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="password" />
                    <input
                        className="input is-primary is-small"
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
                    <label htmlFor="admin">{" Coach "}</label>
                    <input
                        className="checkbox"
                        type="checkbox"
                        name="admin"
                        value={this.state.admin}
                        onChange={this.handleChange}
                        checked={this.state.admin}
                    />
                    <br />
                    <br />
                    <button type="submit" className="button is-primary">
                        {"Register"}
                    </button>
                </form>
                <hr />
            </div>
        );
    }
}
