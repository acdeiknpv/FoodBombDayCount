import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalTriggerOff, selectModalStatus } from '../projectForm/formSlice.js';

import './modal.css'

function Modal() {

    const modalStatus = useSelector(selectModalStatus);
    const dispatch = useDispatch();

    let className = modalStatus.modal ? '' : 'hidden ';
    className += "alert";

    if (modalStatus.modalType === 0) {
        className += " alert-success";
    } else {
        className += " alert-danger";
    }

    return (
            <div className={className} role="alert" onClick={() => dispatch(modalTriggerOff())}>
                {modalStatus.modalMessage}
            </div>
    )
}
export default Modal;