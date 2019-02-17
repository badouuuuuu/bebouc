import * as React from "react";
import Reviews from "./reviews.js";
import axios from "axios";

// import Magazine from '../../../assets/open-magazine.svg';

export class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: [],
        };
    }

    componentDidMount() {
        axios.get(`http://localhost/api/reviews/`).then(res => {
            const review = res.data;

            this.setState({review});
        });
    }

    render() {
        const displayEachReviews = this.state.review.map((review, i) => {
            let index = i + 1;

            return (
                <Reviews
                    index={index}
                    key={review._id}
                    author={review.authorName}
                    book={review.bookID}
                    rating={review.rating}
                    comment={review.comment}
                    created={review.created_at}
                />
            );
        });

        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <h1 id="modalTitle">{this.props.title}</h1>
                    <p id="modalAuthor">{`By ${this.props.author}`}</p>
                    <img src={this.props.thumbnail} />
                    <p id="modalSummary">{this.props.summary}</p>

                    <div className="reviewcont">
                        <h1 className="titlereview"> {"Reviews"}</h1>
                        <br />
                        <br />
                        <br />

                        {displayEachReviews}

                        <form>
                            <input
                                className="InsideReview"
                                placeholder="Your review here"
                            />
                            <button className="submit-button">
                                {" "}
                                {"Into the wild"}
                            </button>
                        </form>
                    </div>
                </div>
                <button
                    onClick={this.props.closeModal}
                    className="modal-close is-large"
                    aria-label="close"
                />
            </div>
        );
    }
}

export default Modal;
