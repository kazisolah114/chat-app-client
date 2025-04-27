import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "authUser",
    initialState: {
        authState: null,
        otherUsers: null,
        selectedUser: null,
        searchedUsers: null,
        onlineUsers: null
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
        },
        setSearchedUsers: (state, action) => {
            state.searchedUsers = action.payload;
        },
        setOnlineUsers: (state, action) => {
            state.onlineUsers = action.payload;
        }
    }
})

export const { setAuthUser, setOtherUsers, setSelectedUser, setSearchedUsers, setOnlineUsers } = userSlice.actions;

export default userSlice.reducer;