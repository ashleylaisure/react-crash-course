import React from 'react'
import sytles from './Modal.module.css'

function Modal({children, onClose}) {
    return (
        <div>
            <div className={sytles.backdrop} onClick={onClose}></div>
            <dialog open className={sytles.modal}>{children}</dialog>
        </div>
        
        
    )
}

export default Modal
