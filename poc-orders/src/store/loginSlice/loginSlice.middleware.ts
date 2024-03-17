import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials } from "../../pages/login/LoginPage.types";
import axios, { AxiosResponse } from "axios";

export const loginMiddleware = createAsyncThunk('/auth/login', async (userCredentials: LoginCredentials) => {
    const response: AxiosResponse<any> = await axios.post('ceva', userCredentials);
    return response.data;
});
