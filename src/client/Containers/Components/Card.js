import * as React from "react";
import Modal from "./Modal";
import Magazine from "../../../assets/logo_Becode.png";
import axios from "axios";

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showModal: "", thumbnail: {}};
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        // DOC OpenLibrary API : https://openlibrary.org/dev/docs/api/books
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=isbn:${
                    this.props.isbn
                }`,
            )
            .then(res => {
                const thumbnail = res.data.items[0].volumeInfo;

                this.setState({thumbnail});
                console.log(thumbnail);
            });
    }

    handleClick() {
        console.log("click is open");
        this.setState({showModal: "is-active"});
    }

    handleClose() {
        console.log("Modal is close");
        this.setState({showModal: ""});
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
                            closeModal={this.handleClose}
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
