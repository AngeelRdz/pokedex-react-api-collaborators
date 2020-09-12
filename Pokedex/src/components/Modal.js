import React from 'react';
import ReactDOM from 'react-dom'

import './styles/Modal.css'

function Modal (props) {
    if(!props.isOpen) {
        return null
    }

    // Se hace render a otro elemento del DOM, para poder
    // hacer que quede sobre el elemento principal de la
    // aplicación.
    
    // ReactDOM.createPortal necesita 2 parámetros:
    // (elemento o elementos que se van a renderizar, en qué elemento del DOM)
    
    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="Modal__container container">
                <button onClick={props.onClose} className="Modal__close-button">
                    X
                </button>
                {/* Se usa props.children para poder reutilizar este Modal,
                y todo su contenido provenga de otro componente */}
                {props.children}
            </div>
        </div>,
        document.getElementById('modal')
    )
};

export default Modal;