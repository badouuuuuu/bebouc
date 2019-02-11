/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import axios from "axios";

export class AddBooks extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            books: [],
            title: "",
            author: "",
            isbn: "",
            language: "",
            summary: "",
            owner: "",
            isBook: false,
            isEbook: false,
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
            console.log(books);
        });
    }

    handleChange(e) {
        let target = e.target,
            value = target.type === "checkbox" ? target.checked : target.value,
            name = target.name,
            author = target.author,
            isbn = target.isbn,
            language = target.language,
            summary = target.summary;

        this.setState({
            [isbn]: value,
            [language]: value,
            [name]: value,
            [summary]: value,
            [author]: value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post(`http://localhost/api/books`, {
                title: this.state.title,
                author: this.state.author,
                isbn: this.state.isbn,
                language: this.state.language,
                summary: this.state.summary,
                owner: "John",
                isEbook: true,
                isBook: false,
            })
            .then(res => {
                if (res.status !== 200) {
                    console.log("Livre déjà existant");
                } else {
                    console.log(res.data);
                    this.setState(prevState => {
                        return {
                            books: [...prevState.books, res.data],
                        };
                    });
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h2>{"Add a book"}</h2>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <label id="icon" htmlFor="title" />
                    <input
                        className="input is-info is-small"
                        type="text"
                        name="title"
                        id="title"
                        placeholder="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="author" />
                    <input
                        className="input is-info is-small"
                        type="text"
                        name="author"
                        id="author"
                        placeholder="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="isbn" />
                    <input
                        className="input is-info is-small"
                        type="text"
                        name="isbn"
                        id="isbn"
                        placeholder="ISBN "
                        value={this.state.isbn}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <label id="icon" htmlFor="language" />
                    <input
                        className="input is-info is-small"
                        type="text"
                        name="language"
                        id="language"
                        placeholder="Language"
                        value={this.state.language}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <textarea
                        className="textarea is-info is-small"
                        type="text"
                        name="summary"
                        id="summary"
                        placeholder="summary"
                        value={this.state.summary}
                        onChange={this.handleChange}
                        cols="30"
                        rows="5"
                        required
                    />
                    <hr />

                    <input
                        className="input is-info is-small"
                        type="text"
                        name="owner"
                        id="owner"
                        placeholder="owner"
                        value={this.state.owner}
                        onChange={this.handleChange}
                        required
                    />
                    <hr />

                    <button type="submit" className="button is-info">
                        {"Register"}
                    </button>
                </form>
                <hr />

                <a href="/">
                    {" "}
                    <button type="submit" className="button is-danger">
                        {"Back Dev homepage"}
                    </button>
                </a>
                <hr />
                <h1>{"Books database list : "}</h1>
                <ul>
                    {this.state.books.map(book => (
                        <li key={book._id}>
                            {"-----------------"}
                            <br />
                            <strong>{"Title : "} </strong>
                            {book.title} <br />
                            <strong> {"Author : "} </strong>
                            {book.author} <br />
                            <strong>{"ISBN : "} </strong> {book.isbn} <br />
                            <strong>{"language : "}</strong> {book.language}{" "}
                            <br />
                            <strong> {"summary : "}</strong> {book.summary}{" "}
                            <br />
                            <strong>{"owner : "} </strong> {book.owner} <br />
                            <strong>{"Database Id : "} </strong> {book._id}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
