import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: [],
    modalStatus: {
        modal: false,
        modalType: 0,
        modalMessage: ""
    }
};

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        historyAdd: (state, action) => {
            state.history = [...state.history, {
                start: action.payload.start,
                end: action.payload.end,
                dayDifference: action.payload.dayDiff
            }];
        },
        modalTriggerOn: (state, action) => {
            state.modalStatus.modal = true;
            state.modalStatus.modalType = action.payload.modalType;
            state.modalStatus.modalMessage = action.payload.modalMessage;
        },
        modalTriggerOff: (state) => {
            state.modalStatus.modal = false;
            state.modalStatus.modalType = 0;
            state.modalStatus.modalMessage = '';
        },
    },

    extraReducers: () => { },
});

export const { historyAdd, modalTriggerOn, modalTriggerOff } = formSlice.actions;

export const selectHistory = (state) => state.form.history;
export const selectModalStatus = (state) => state.form.modalStatus;


export default formSlice.reducer;