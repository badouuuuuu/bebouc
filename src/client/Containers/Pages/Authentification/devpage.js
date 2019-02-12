import React from "react";
// import Routes from "../../routes";

export class devpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        //   this.handleChange.bind(this);
        //   this.send.bind(this);
    }
    // send = event => {
    //     if (this.state.email.length === 0) {
    //         return;
    //     }
    //     if (this.state.password.length === 0) {
    //         return;
    //     }
    //     Routes.login(this.state.email, this.state.password).then(
    //         data => {
    //             localStorage.setItem("token", data.data.token);
    //             window.location = "/homepage";
    //         },
    //         error => {
    //             console.log(error);
    //             return;
    //         },
    //     );
    // };
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value,
    //     });
    // };
    render() {
        return (
            <div className="container">
                <section className="hero is-danger">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">{"Dev Page"}</h1>
                            <h2>{"Cette route sera destiné au login"}</h2>
                        </div>
                    </div>
                </section>

                <br />
                <strong>
                    <h1>{"Route crée pour environement dev"}</h1>
                </strong>
                <br />
                <hr />
                <form action="/addbooks" method="get">
                    <button className="button is-info">{"New Books"}</button>
                    <p>{"Test d'ajout de livre avec la bd"}</p>
                </form>
                <hr />
                <form action="/Register" method="get">
                    <button className="button is-primary">{"New Users"}</button>
                    <p>{"Test d'ajout d'utilisateur avec droit ou non"}</p>
                </form>
                <hr />
                <form action="/Homepagetest" method="get">
                    <button className="button is-warning">
                        {"Front-Ent Dev"}
                    </button>
                    <p>{"SPA pour developpement FO"}</p>
                </form>
                <hr />
                <form action="/login" method="get">
                    <button className="button is-success">{"Login"}</button>
                    <p>{"SPA pour Login"}</p>
                </form>

                <hr />
                <footer className="footer">
                    <div className="content has-text-centered">
                        <a
                            href="https://github.com/Elias2702/bebouc"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="button is-danger">
                                {"Repo Github Bebook"}
                            </button>
                        </a>
                    </div>
                </footer>
            </div>
        );
        // <div className="Login">
        //     <FormGroup controlId="email" bsSize="large">
        //     <ControlLabel>Email</ControlLabel>
        //     <FormControl autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
        //     </FormGroup>
        //     <FormGroup controlId="password" bsSize="large">
        //     <ControlLabel>Password</ControlLabel>
        //     <FormControl value={this.state.password} onChange={this.handleChange} type="password"/>
        //     </FormGroup>
        //     <Button
        //     onClick={this.send}
        //     block
        //     bsSize="large"
        //     type="submit"
        //     >
        //     Connexion
        //     </Button>
        // </div>
    }
}