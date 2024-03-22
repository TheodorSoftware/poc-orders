import { Box, Button, Typography } from "@mui/material";
import { navbarStyle } from "./navbarStyle";
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom";
import { CSSProperties } from "@mui/material/styles/createMixins";
import { selectUserEmail } from "../../store/loginSlice/loginSlice.selectors";
import { useDispatch, useSelector } from "react-redux";
import { Cookies } from "react-cookie";
import { Dispatch } from "redux";
import { initialState, resetLoginSlice } from "../../store/loginSlice/loginSlice";

const Navbar = () => {

    const dispatch: Dispatch<any> = useDispatch();
    const navigate: NavigateFunction = useNavigate();
    const email = useSelector(selectUserEmail);

    const logoutHandler = (): void => {
        const cockie = new Cookies();
        cockie.remove('jwt');
        dispatch(resetLoginSlice(initialState));
        setTimeout( () => {
            navigate('/login');
        }, 50);
    }

    const goHomeHandler = (): void => {
        navigate('/');
    }

    return (
        <Box sx={navbarStyle.navbarContainer}>
            <Box sx={navbarStyle.logoContainer}>
                <Button onClick={goHomeHandler}> Logo </Button>
                <Typography> {email}</Typography>
            </Box>
            <Box sx={navbarStyle.list}>
                <NavLink style={navbarStyle.listItem as CSSProperties} to={"/orders"}>
                    <Typography>
                        Orders
                    </Typography>
                </NavLink>
                <NavLink style={navbarStyle.listItem as CSSProperties} to={"/orders/create"}>
                    <Typography>
                        Create Order
                    </Typography>
                </NavLink>
                <Button
                    onClick={logoutHandler} 
                    sx={navbarStyle.listItem.logout}>
                    Logout
                </Button>
            </Box>
        </Box>
    )
};

export default Navbar;
