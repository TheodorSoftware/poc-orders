import { ActionReducerMapBuilder, Slice, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utils/constants/Status.enum";
import LoginSlice from "./loginSlice.interface";
import { loginMiddleware } from "./loginSlice.middleware";

export const initialState: LoginSlice = {
    loginResponse: {
        body: null,
        status: Status.IDLE,
        error: ""
    }
}

export const loginSlice: Slice = createSlice({
    name: "loginPage",
    initialState,
    reducers:{
        resetLoginSlice: (state,action) => {
            return{
                ...state,
                loginResponse: {
                    body: action.payload.body,
                    status: action.payload.status,
                    error: action.payload.error
                }
            }
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<LoginSlice>) => {
        builder.addCase(loginMiddleware.pending, (state) => {
            return {
                ...state,
                loginResponse: {
                    body: null,
                    status: Status.PENDIING,
                    error: ''
                }
            }
        }).addCase(loginMiddleware.rejected, (state, action) => {
            return {
                ...state,
                loginResponse: {
                    body: null,
                    status: Status.FAILED,
                    error: action.error.message as string
                }
            }
        }).addCase(loginMiddleware.fulfilled, (state, action)=>{
            return {
                ...state,
                loginResponse: {
                    body: action.payload.email,
                    status: Status.SUCCESS,
                    error: ''
                }
            }
        });
    }
 });

export const { resetLoginSlice } = loginSlice.actions;

export default loginSlice.reducer;


