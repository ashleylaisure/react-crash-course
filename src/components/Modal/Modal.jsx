import React from 'react'
import { useNavigate } from 'react-router-dom'
import sytles from './Modal.module.css'

function Modal({children}) {
    const navigate = useNavigate()

    function onClose() {
        // navigate('/')
        navigate('..')
    }

    return (
        <div>
            <div className={sytles.backdrop} onClick={onClose}></div>
            <dialog open className={sytles.modal}>{children}</dialog>
        </div>
        
        
    )
}

export default Modal
