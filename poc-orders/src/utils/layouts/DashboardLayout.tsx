import { Fragment } from "react/jsx-runtime";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const DashboardLayout: React.FC = ():JSX.Element => {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
        </Fragment>
    )
};

export default DashboardLayout