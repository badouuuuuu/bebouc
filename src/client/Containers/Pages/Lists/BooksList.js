import * as React from "react";
import axios from "axios";
import BookLine from "../../Components/BookLine";

export class BooksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/books`).then(res => {
            const books = res.data;

            this.setState({books});
        });
    }

    render() {
        const displayEachBookLine = this.state.books.map((book, i) => {
            let index = i + 1;

            return (
                <BookLine
                    index={index}
                    key={book._id}
                    bookid={book._id}
                    title={book.title}
                    author={book.author}
                    isbn={book.isbn}
                    language={book.language}
                    owner={book.owner}
                    book={book.isBook}
                    ebook={book.isEbook}
                />
            );
        });

        return (
            <>
                <form action="/addbook" method="get">
                    <button className="submit-button">{"Add a Book"}</button>
                </form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Title"}</th>
                            <th>{"Author"}</th>
                            <th>{"ISBN"}</th>
                            <th>{"Language"}</th>
                            <th>{"Owner"}</th>
                            <th>{"Book?"}</th>
                            <th>{"Ebook?"}</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{displayEachBookLine}</tbody>
                </table>
            </>
        );
    }
}

export default BooksList;
