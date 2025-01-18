const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "authUser",
    initialState: {
        authState: null,
        otherUsers: null,
        selectedUser: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authState = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        }
    }
})

export const { setAuthUser, setOtherUsers, setSelectedUser } = userSlice.actions;

export default userSlice.reducer;