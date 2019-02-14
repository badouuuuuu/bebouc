import * as React from "react";
// import Magazine from '../../../assets/open-magazine.svg';
import Magazine from "../../../assets/logo_Becode.png";

export class Modal extends React.Component {
    render() {
        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <h1 id="modalTitle">{this.props.title}</h1>
                    <p id="modalAuthor">{`By ${this.props.author}`}</p>
                    <img src={Magazine} />
                    <p id="modalSummary">{this.props.summary}</p>
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
