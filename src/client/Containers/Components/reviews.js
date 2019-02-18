import * as React from "react";

// import Magazine from '../../../assets/open-magazine.svg';

export class Reviews extends React.Component {
    render() {
        return (
            <div className="Reviews">
                <li> {`Author : ${this.props.author}`}</li>
                <li> {`Comment : ${this.props.comment}`}</li>
                <li> {`Date : ${this.props.created}`}</li>
            </div>
        );
    }
}

export default Reviews;
