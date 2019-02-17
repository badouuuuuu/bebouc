import * as React from "react";
import axios from "axios";

// import Magazine from '../../../assets/open-magazine.svg';

export class Reviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: [],
        };
    }

    componentDidMount() {
        axios
            .get(`http://localhost/api/reviews/${this.props.bookid}`)
            .then(res => {
                const review = res.data;

                this.setState({review});
            });
    }

    render() {
        const displayEachReviews = this.state.review.map((review, i) => {
            let index = i + 1;

            return <div author={review.authorName} review={review.comment} />;
        });

        return (
            <div className="reviewcont">
                <h1 className="titlereview"> {"Reviews"}</h1>
                <br />
                <br />
                <br />

                <form>
                    <div className="Reviews">{displayEachReviews}</div>

                    <input
                        className="InsideReview"
                        placeholder="Your review here"
                    />
                    <div>
                        <button className="submit-button">
                            {" "}
                            {"Into the wild"}
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Reviews;
