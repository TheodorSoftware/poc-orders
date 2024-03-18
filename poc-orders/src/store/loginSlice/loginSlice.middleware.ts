import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginCredentials } from "../../pages/login/LoginPage.types";
import axios, { AxiosResponse } from "axios";
import { Cookies } from "react-cookie";

export const loginMiddleware = createAsyncThunk('/auth/login', async (userCredentials: LoginCredentials) => {
    const response: AxiosResponse<any> = await axios.post('http://localhost:8080/login', userCredentials);

    if(response.data){
        const cockie = new Cookies();
        cockie.set('jwt',response.data,{path:'/'});
    }

    return response.data;    
});
