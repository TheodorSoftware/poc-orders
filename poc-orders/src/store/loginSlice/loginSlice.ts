import { ActionReducerMapBuilder, Slice, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../utils/constants/Status.enum";
import LoginSlice from "./loginSlice.interface";
import { loginMiddleware } from "./loginSlice.middleware";

const initialState: LoginSlice = {
    loginResponse: {
        body: null,
        status: Status.IDLE,
        error: ""
    }
}

export const loginSlice: Slice = createSlice({
    name: "loginPage",
    initialState,
    reducers:{},
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

export default loginSlice.reducer;

