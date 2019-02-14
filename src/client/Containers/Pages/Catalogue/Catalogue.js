import * as React from "react";
import axios from "axios";
import NavCatalogue from "./NavCatalogue.js";
import NavBar from "../../Components/Navbar.js";

export class Catalogue extends React.Component {
    constructor(props) {
        super(props);
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
            titleprinc: "List of Books",
        };
    }

    render() {
        axios.get(`http://localhost/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
            console.log(books);
        });

        return (
            <div className="backgroundhome">
                <NavBar />
                <NavCatalogue />
                <div className="backgroundcat">
                    <h1 className="titleCat">{this.state.titleprinc}</h1>
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
                                <strong>{"owner : "} </strong> {book.owner}{" "}
                                <br />
                                <strong>{"Database Id : "} </strong> {book._id}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Catalogue;