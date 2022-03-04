import React from 'react';

class Modal extends React.Component {
    render() {
        var modal = '';
        if (this.props.type === 0) {
            modal = <div className="alert alert-success" role="alert">
                {this.props.message}
            </div>;
        } else {
            modal = <div className="alert alert-danger" role="alert">
                {this.props.message}
            </div>
        }

        return (
            modal
        )
    }
}
export default Modal;