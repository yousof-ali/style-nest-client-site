import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebaseConfig';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const gProvider = new GoogleAuthProvider();
    const fProvider = new FacebookAuthProvider();
    
    const createUserWithEmail = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUserWithEmail = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe()
        }
    })
    
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,gProvider);
    };

    const facebookLogin = () => {
        setLoading(true);
        return signInWithPopup(auth,fProvider)
    }

    const value = {
        user,
        createUserWithEmail,
        loginUserWithEmail,
        logOutUser,
        googleLogin,
        facebookLogin

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;