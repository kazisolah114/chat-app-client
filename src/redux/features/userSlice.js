const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "authUser",
    initialState: {
        authState: null,
        otherUsers: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authState = action.payload;
        },
        setOtherUsers: (state, action) => {
            state.otherUsers = action.payload;
        }
    }
})

export const { setAuthUser, setOtherUsers } = userSlice.actions;

export default userSlice.reducer;