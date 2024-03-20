import { Box } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = ():JSX.Element => {
    return (
        <Box height="100%">
            <Navbar />
            <Outlet />
        </Box>
    )
};

export default DashboardLayout