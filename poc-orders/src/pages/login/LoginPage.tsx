import { Box, Button, FormGroup, Typography } from "@mui/material";
import { loginPageStyle } from "./loginPageStyle";
import { TextField } from '@mui/material';
import { NavLink } from "react-router-dom";

const LoginPage = ({}) => {
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
                            type="email" />
                        <TextField 
                            sx={loginPageStyle.loginPageBoxControlsInput}
                            required
                            label="Password" 
                            variant="outlined"
                            type="password" />
                        <Button variant="contained" type="submit"> Sign In </Button>
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
