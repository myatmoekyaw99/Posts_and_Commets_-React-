import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../users/context/AuthContext";

function ProtectedRoute({children}) {

    const {user} = useContext(AuthContext);
    // console.log(user);
    return ( 
        <>
            {
                user ? children : <Navigate to="/login"/>
            }
        </>
     );
}

export default ProtectedRoute;