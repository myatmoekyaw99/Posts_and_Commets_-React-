import { Navigate } from "react-router-dom";
import { useAuth } from "../users/context/AuthContext";

function ProtectedRoute({children}) {

    const {user} = useAuth();
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