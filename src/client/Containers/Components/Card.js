import * as React from "react";
import Modal from "./Modal";
import Magazine from "../../../assets/logo_Becode.png";

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
            <div id="bookCard">
                <ul>
                    <li>
                        <h1 id="bookCardHeader">{`${this.props.title}`}</h1>
                    </li>
                    <li>
                        <img src={Magazine} id="cardImage" />
                    </li>
                    <li>{`Author : ${this.props.author}`}</li>
                    <li>{`Language : ${this.props.language}`}</li>
                    <li>
                        <button
                            type="button"
                            onClick={this.handleClick}
                            id="cardButton">
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
