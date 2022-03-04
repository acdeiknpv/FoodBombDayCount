import React from 'react';
import { dateCounter } from '../../services/dateCounter/dateCounter';
import { dateOrder, dateVerifier } from '../../services/dateVerifier/dateVerifier';

import Modal from '../modal/modal';

import './projectForm.css';

class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { startDate: '', endDate: '', modal: false, modalType: 0, modalMessage: "" };

        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleStartDateChange(event) {
        this.setState({ startDate: event.target.value, modal: false });
    }

    handleEndDateChange(event) {
        this.setState({ endDate: event.target.value, modal: false });
    }

    handleSubmit(event) {
        event.preventDefault();

        if (dateVerifier(this.state.startDate) !== -1 && dateVerifier(this.state.endDate) !== -1) {
            if (dateOrder(this.state.startDate, this.state.endDate) !== -1) {
                var dayDifference = dateCounter(this.state.startDate, this.state.endDate);
                this.props.handleHistory(this.state.startDate, this.state.endDate, dayDifference);
                this.setState({modal: true, modalType: 0, modalMessage: "Data pushed"});
            }
            else {
                this.setState({modal: true, modalType: -1, modalMessage: "Start Date must be set earlier than the End Date"});
                return -1;
            };
        } else {
            this.setState({modal: true, modalType: -1, modalMessage: "Respect Format: DD/MM/YYYY with 1900 < Year < 3000"});
            return -1;
        };
    }

    closeModal() {
        this.setState({modal: false});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <div className='alignCenter'>
                        <div className="startDate">
                            <label for="startDate">Project start date: </label>
                            <input type="text" id="startDate" name="startDate" placeholder="DD/MM/YYYY" value={this.state.startDate} onChange={this.handleStartDateChange} required pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" />
                        </div>

                        <div className="endDate">
                            <label for="endDate">Project end date: </label>
                            <input type="text" id="endDate" name="endDate" placeholder="DD/MM/YYYY" value={this.state.endDate} onChange={this.handleEndDateChange} required pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" />
                        </div>
                    </div>

                    <div className="alignCenter">
                        <input type="submit" value="Send" />
                    </div>

                </form>
                <div className={!this.state.modal ? 'hidden' : ''}>
                    <Modal type={this.state.modalType} message={this.state.modalMessage}/>
                </div>
            </div>
        );
    }
}
export default ProjectForm;