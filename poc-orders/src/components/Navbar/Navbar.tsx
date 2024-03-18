import { Box, Button, Typography } from "@mui/material";
import { navbarStyle } from "./navbarStyle";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "@mui/material/styles/createMixins";

const Navbar = () => {
    return (
        <Box sx={navbarStyle.navbarContainer}>
            <Typography> Logo </Typography>
            <Box sx={navbarStyle.list}>
                <NavLink style={navbarStyle.listItem as CSSProperties} to={"/products"}>
                    <Typography>
                        Products
                    </Typography>
                </NavLink>
                <Button sx={navbarStyle.listItem}>
                    Logout
                </Button>
            </Box>
        </Box>
    )
};

export default Navbar;
