import * as React from "react";

export class Card extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <h1>{`Book card number ${this.props.index}`}</h1>
                    </li>
                    <li>{`Title : ${this.props.title}`}</li>
                    <li>{`Author : ${this.props.author}`}</li>
                    <li>{`ISBN : ${this.props.isbn}`}</li>
                    <li>{`Language : ${this.props.language}`}</li>
                    <li>{`Summary : ${this.props.summary}`}</li>
                    <li>{`Owner : ${this.props.owner}`}</li>
                </ul>
            </div>
        );
    }
}

export default Card;
