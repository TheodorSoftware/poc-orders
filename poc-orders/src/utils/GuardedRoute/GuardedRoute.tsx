import { ReactNode } from "react";
import { Cookies } from "react-cookie"
import { Navigate } from "react-router-dom"

interface ProtectedRouteProps{
    children: ReactNode
}


const GuardedRoute = ({children}: ProtectedRouteProps) => {

    const cookies: Cookies = new Cookies();

    if(!cookies.get('jwt')){
        return <Navigate to="/login" />
    }

    return children

};

export default GuardedRoute;