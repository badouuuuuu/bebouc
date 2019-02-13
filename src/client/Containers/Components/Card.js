import * as React from "react";
import Modal from "./Modal";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: ""};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({showModal: "is-active"});
    }

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
                    <li>
                        <button type="button" onClick={this.handleClick}>
                            {"See book"}
                        </button>
                    </li>
                    <li>
                        {" "}
                        <Modal
                            show={this.state.showModal}
                            index={this.props.index}
                            key={this.props._id}
                            title={this.props.title}
                            author={this.props.author}
                            language={this.props.language}
                            owner={this.props.owner}
                            summary={this.props.summary}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

export default Card;
