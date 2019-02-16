import * as React from "react";

export class DeleteModal extends React.Component {
    render() {
        return (
            <div className={`modal ${this.props.show}`}>
                <div className="modal-background" />
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">
                            {`Delete ${this.props.name}`}
                        </p>
                        <button
                            className="delete"
                            aria-label="close"
                            onClick={this.props.closeModal}
                        />
                    </header>
                    <section className="modal-card-body">
                        {`Are you sure you want to delete :`}
                        <br />
                        <strong className="delete-book-title">
                            <p> {`${this.props.title}`} </p>{" "}
                        </strong>
                    </section>
                    <footer className="modal-card-foot">
                        <form onSubmit={this.props.delete}>
                            <button
                                className="secondary-button"
                                type="submit"
                                onClick={this.props.closeModal}>
                                {"Delete"}
                            </button>
                        </form>
                        <button
                            className="submit-button"
                            aria-label="close"
                            onClick={this.props.closeModal}>
                            {"Cancel"}
                        </button>
                    </footer>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
