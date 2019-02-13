import * as React from "react";

export class BookLine extends React.Component {
    render() {
        const isbook = this.props.book;
        const isebook = this.props.ebook;

        return (
            <tr>
                <th>{this.props.title}</th>
                <td>{this.props.author}</td>
                <td>{this.props.isbn}</td>
                <td>{this.props.language}</td>
                <td>{this.props.owner}</td>
                <td>{isbook ? "Yes" : "No"}</td>
                <td>{isebook ? "Yes" : "No"}</td>
                <td>
                    <button className="secondary-button">{"Edit"}</button>
                    <button className="selected-button">{"Delete"}</button>
                </td>
            </tr>
        );
    }
}

export default BookLine;
