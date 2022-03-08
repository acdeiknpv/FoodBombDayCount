import React from 'react';
import { useInput } from '../../hooks/input-hook.js';
import { useDispatch } from 'react-redux';

import { dateCounter } from '../../services/dateCounter/dateCounter';
import { dateOrder, dateVerifier } from '../../services/dateVerifier/dateVerifier';

import { historyAdd, modalTriggerOn } from '../../store/reducers/formSlice.js';

import './projectForm.css';

function ProjectForm() {

    const { value: startDate, bind: bindStartDate } = useInput('');
    const { value: endDate, bind: bindEndDate } = useInput('');

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (dateVerifier(startDate) !== -1 && dateVerifier(endDate) !== -1) {
            if (dateOrder(startDate, endDate) !== -1) {
                let dayDifference = dateCounter(startDate, endDate);
                dispatch(historyAdd({ start: startDate, end: endDate, dayDiff: dayDifference }));
                dispatch(modalTriggerOn({ modalType: 0, modalMessage: "Data pushed" }));
                return 0;
            }
            else {
                dispatch(modalTriggerOn({ modalType: -1, modalMessage: "Start Date must be set earlier than the End Date" }));
                return -1;
            }
        } else {
            dispatch(modalTriggerOn({ modalType: -1, modalMessage: "Respect Format: DD/MM/YYYY with 1900 < Year < 3000" }));
            return -1;
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div className='alignCenter'>
                    <div className="startDate">
                        <label for="startDate">Project start date: </label>
                        <input type="text" id="startDate" name="startDate" placeholder="DD/MM/YYYY" {...bindStartDate} required pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" />
                    </div>

                    <div className="endDate">
                        <label for="endDate">Project end date: </label>
                        <input type="text" id="endDate" name="endDate" placeholder="DD/MM/YYYY" {...bindEndDate} required pattern="^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$" />
                    </div>
                </div>

                <div className="alignCenter">
                    <input type="submit" value="Send" />
                </div>

            </form>
        </div>
    );
}
export default ProjectForm;