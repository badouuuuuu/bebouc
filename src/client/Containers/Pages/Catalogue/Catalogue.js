import * as React from "react";
import axios from "axios";
import NavCatalogue from "./NavCatalogue";
// import NavCatalogue from "./NavCatalogue";

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
                <NavCatalogue />
                <div className="backgroundcat">
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
