import React, {useRef, useState} from "react";
import PropTypes from "prop-types";

import './modal.scss';

const Modal = props => {

    const [active, setActive] = useState(false);

    return (
        <div className={`modal ${active ? 'active' : ''}`} children={props.children} id={props.id}/>
    );
}

Modal.propTypes = {
    active: PropTypes.bool,
    id: PropTypes.string
}


export const ModalContent = props => {
    const contentRef = useRef(null);

    const closeModal = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onClose) props.onClose();
    }

    return <div ref={contentRef} className="modal__content">
        {props.children}
        <div className="modal__content__close" onClick={closeModal}>
            <i className="bx bx-x"></i>
        </div>
    </div>
}

export default Modal