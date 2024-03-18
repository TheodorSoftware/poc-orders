import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const loginSelector = (state:RootState) => state.loginSlice;

export const selectLoginStatus = createSelector(
    loginSelector,
    (loginSlice) => loginSlice.loginResponse.status
)