import { createContext } from 'react';
import UseFirebase from '../hooks/UseFirebase';

export const  AuthContext=createContext();
const AuthProvider = ({children}) => {
    
   
    const context=UseFirebase();
   
    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;