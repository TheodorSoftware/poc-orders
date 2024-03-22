import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Box } from "@mui/material";

const ProductPageLayout: React.FC = ():JSX.Element => {
    return (
        <Box height='100%' width='100%' display="flex" flexDirection="row" alignItems="flex-start" justifyContent="flex-start">
            <Outlet />
        </Box>
    )
};

export default ProductPageLayout