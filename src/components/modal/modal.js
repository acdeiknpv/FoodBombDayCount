import React from 'react';

function Modal(props) {
    let className = "alert";

    if (props.type === 0) {
        className += " alert-success";
    } else {
        className += " alert-danger";
    }

    return (
        <div className={className} role="alert">
            {props.message}
        </div>
    )
}
export default Modal;