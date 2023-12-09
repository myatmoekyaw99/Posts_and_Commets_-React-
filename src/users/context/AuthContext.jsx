import React, { Children, useContext, useState } from "react";

const AuthContext = React.createContext();

export const AuthProvider=({children}) => {

    const [user,setUser] = useState('');

    const login=(data) =>{setUser(data)};

    const logout = () => {setUser(null)};
    
    return ( 
        <AuthContext.Provider value={{user,setUser,login,logout}}>
            {children}
        </AuthContext.Provider>
     );
}

export const useAuth = ()=>{
    return useContext(AuthContext);
};