import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
        this.modal = document.createElement('DIV');
        document.body.appendChild(this.modal);
    }

    componentWillUnmount() {
        document.body.removeChild(this.modal);
    }

    render() {

        return ReactDOM.createPortal(
            <div>
                {this.props.children}
            </div>,
            this.modal
        )
    }
}

export default Modal;