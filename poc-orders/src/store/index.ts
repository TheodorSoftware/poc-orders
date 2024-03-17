import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice/loginSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
    reducer: {
        loginSlice: loginSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;