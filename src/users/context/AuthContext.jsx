import React, { useContext, useMemo, useState } from "react";
import { getLoginUser } from "../UserProfile";

export const AuthContext = React.createContext();

export const AuthProvider=({children}) => {

    const login_user = getLoginUser();
    const [user,setUser] = useState(login_user ? 1 : 0);
    const login = (data) =>{ setUser(data)};
    const logout = ()=>{setUser(null)};
    
    console.log(user);
    return ( 
        <AuthContext.Provider value={{user,login,logout}}>
               {children}
        </AuthContext.Provider>
     );
}

// export const useAuth = ()=>{
//     return useContext(AuthContext);
// };