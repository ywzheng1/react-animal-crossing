import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('section');
    }

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}

export default Modal;