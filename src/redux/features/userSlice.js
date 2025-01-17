const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
    name: "authUser",
    initialState: {
        authState: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authState = action.payload;
        }
    }
})

export const { setAuthUser } = userSlice.actions;

export default userSlice.reducer;