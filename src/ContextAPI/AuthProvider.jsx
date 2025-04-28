import React, { createContext, useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);
    
    const createUserWithEmail = (email,password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUserWithEmail = (email,password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const value = {
        name:'yousof',
        createUserWithEmail,
        loginUserWithEmail

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;