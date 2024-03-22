import { FormEvent, useEffect, useRef, useState } from "react";
import { Box, Button, FormGroup, Typography } from "@mui/material";
import { loginPageStyle } from "./loginPageStyle";
import { TextField } from '@mui/material';
import { NavLink, NavigateFunction, useNavigate } from "react-router-dom";
import { LoginCredentials, LoginFormError } from "./LoginPage.types";
import { useAppDispatch } from "../../store";
import { Dispatch } from "redux";
import { loginMiddleware } from "../../store/loginSlice/loginSlice.middleware";
import { useSelector } from "react-redux";
import { selectLoginStatus } from "../../store/loginSlice/loginSlice.selectors";
import { Status } from "../../utils/constants/Status.enum";
import { Rules, ValidationRegexRules } from "../../utils/regex/validationRegexRules";

const LoginPage = ({}) => {

    const navigate: NavigateFunction = useNavigate();

    const dispatch: Dispatch = useAppDispatch();
    const loginStatus: Status = useSelector(selectLoginStatus);

    const emailInputRef = useRef<HTMLInputElement>();
    const passwordInputRef = useRef<HTMLInputElement>()

    const [formError, setFormError] = useState<LoginFormError>({
        email: false,
        password: false,
    });

    const signInHandler = (event: FormEvent) => {
        event.preventDefault();
        if(emailInputRef.current && passwordInputRef.current){
            if(!formError.email && !formError.password){
                dispatch(loginMiddleware({
                    email: emailInputRef.current.value,
                    password: passwordInputRef.current.value
                } as LoginCredentials) as any);
                emailInputRef.current.value = "";
                passwordInputRef.current.value = ""
                setTimeout( () => {
                    navigate('/')
                }, 50)
            };
        }
    };

    const checkUserEmailHandler = () => {
        if(emailInputRef.current){
            if(!ValidationRegexRules.get(Rules.EMAIL)?.test(emailInputRef.current.value)){
                setFormError(prevFormError => {
                    return {
                        ...prevFormError,
                        email: true
                    }
                })
            }
        }
    }

    const checkUserPasswordHandler = () => {
        if(passwordInputRef.current){
            if(passwordInputRef.current.value.length <= 4){
                setFormError(prevFormError => {
                    return {
                        ...prevFormError,
                        password: true
                    }
                })
            }
        }
    }

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
                            onBlur={checkUserEmailHandler}
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
                            onBlur={checkUserPasswordHandler}
                            helperText={formError.password ? 'Insert a valid password' : null}
                            error={formError.password ? true: false} />
                        <Button 
                            variant="contained" 
                            type="submit" 
                            onClick={signInHandler}> Sign In </Button>
                    </FormGroup>
                        {
                            loginStatus === Status.FAILED ? <Typography sx={loginPageStyle.loginPageErrorMessage}> Incorect email and password </Typography> : null
                        }
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
