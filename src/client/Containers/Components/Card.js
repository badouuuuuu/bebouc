import * as React from "react";

export class Card extends React.Component {
    render() {
        return (
            <div>
                <h1>{"Books database list : "}</h1>
                <ul>
                    {this.props.books.map(book => (
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
