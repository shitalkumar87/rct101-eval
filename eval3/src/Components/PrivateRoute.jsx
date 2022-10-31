import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Appcontext } from "../Context/AppContext";

function PrivateRoute({children}) {
    const {authstate}=useContext(Appcontext)
    if(!authstate.isAuth){
        return <Navigate to="/login"/>
    }
    return children
}

export default PrivateRoute;
