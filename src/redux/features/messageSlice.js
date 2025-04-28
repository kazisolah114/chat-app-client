import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: "message",
    initialState: {
        messages: []
    },
    reducers: {
        setMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        clearMessages: (state) => {
            state.messages = [];
        }
    }
})
export const { setMessage, clearMessages } = messageSlice.actions;
export default messageSlice.reducer;