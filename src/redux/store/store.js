import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import messageReducer from "../features/messageSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        message: messageReducer
    }
})

export default store;