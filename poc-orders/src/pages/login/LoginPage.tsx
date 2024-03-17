import { FormEvent, useRef, useState } from "react";
import { Box, Button, FormGroup, Typography } from "@mui/material";
import { loginPageStyle } from "./loginPageStyle";
import { TextField } from '@mui/material';
import { NavLink } from "react-router-dom";
import { emailRegex } from "../../utils/regex/emailReGex";

declare type LoginCredentials = {
    email: string,
    password: string
};

declare type LoginFormError = {
    email: boolean,
    password: boolean
};

const LoginPage = ({}) => {

    const emailInputRef = useRef<HTMLInputElement>();
    const passwordInputRef = useRef<HTMLInputElement>()

    const [userCredentials, setUserCredentials] = useState<LoginCredentials>({
        email: '',
        password: ''
    });

    const [formError, setFormError] = useState<LoginFormError>({
        email: false,
        password: false
    })

    const signInHandler = (event: FormEvent) => {
        event.preventDefault();
        if(emailInputRef.current && passwordInputRef.current){
            if(emailInputRef.current.value.length === 0 || 
                !emailRegex.test(emailInputRef.current.value)){
                    setFormError(prevFormError => {
                        return {
                            ...prevFormError,
                            email: true
                        }
                    })
            };
            if(passwordInputRef.current.value.length === 0 ||
                passwordInputRef.current.value.length <= 4){
                    
                    setFormError(prevFormError => {
                        return {
                            ...prevFormError,
                            password: true
                        }
                    })
            }
        }
    };

    const resetEmailInputErrorHandler = () => {
        setFormError(prevFormError => {
            return{
                ...prevFormError,
                email: false
            }
        });
    };

    const resetPasswordInputErrorHandler = () => {
        setFormError(prevFormError => {
            return{
                ...prevFormError,
                password: false
            }
        });
    };

    return (
        <Box sx={loginPageStyle.loginPageContainer}>
            <Box sx={loginPageStyle.loginPageBox}>
                <Typography variant="h4"
                    align="center"> 
                    Welcome 
                </Typography>
                <Box sx={loginPageStyle.loginPageBoxContent}>
                    <FormGroup sx={loginPageStyle.loginPageFormGroup}>
                        <TextField 
                            sx={loginPageStyle.loginPageBoxControlsInput}
                            required
                            label="Email" 
                            variant="outlined"
                            type="email" 
                            inputRef={emailInputRef}
                            onChange={resetEmailInputErrorHandler}
                            helperText={formError.email ? 'Insert a valid email' : null}
                            error={formError.email ? true : false} />
                        <TextField 
                            sx={loginPageStyle.loginPageBoxControlsInput}
                            required
                            label="Password" 
                            variant="outlined"
                            type="password" 
                            inputRef={passwordInputRef}
                            onChange={resetPasswordInputErrorHandler}
                            helperText={formError.password ? 'Insert a valid password' : null}
                            error={formError.password ? true: false} />
                        <Button 
                            variant="contained" 
                            type="submit" 
                            onClick={signInHandler}> Sign In </Button>
                    </FormGroup>
                    <NavLink 
                        style={loginPageStyle.loginPageRegisterNavLink}  
                        to={'/register'}> 
                        <Typography 
                            variant="body2"
                            align="center">
                                Don't have an account ? Sign Up
                            </Typography>
                    </NavLink>
                </Box>
            </Box>
        </Box>
    )
};

export default LoginPage;
