import * as React from "react";
// import Magazine from '../../../assets/open-magazine.svg';
import Magazine from "../../../assets/logo_Becode.png";

export class Modal extends React.Component {
    render() {
        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-content">
                    <img src={Magazine} />
                    <h1>{`Book modal number ${this.props.index}`}</h1>
                </div>
                <button className="modal-close is-large" aria-label="close" />
            </div>
        );
    }
}

export default Modal;
