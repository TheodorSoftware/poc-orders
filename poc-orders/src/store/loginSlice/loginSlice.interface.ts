import { Status } from "../../utils/constants/Status.enum";

interface LoginSlice{
    loginResponse: {
        body: any,
        status: Status,
        error: string;
    }
};

export default LoginSlice