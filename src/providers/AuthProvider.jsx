import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
         return signInWithEmailAndPassword(auth, email, password)
    }
    const signOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])
    const authInfo = {
    user,
    createUser,
    signOut,
    signIn
    }
    return (

        <AuthContext.Provider value = {authInfo}>
            {children}
        </AuthContext.Provider>
    );
    
};
AuthProvider.propTypes = {
    children: PropTypes.object
};

export default AuthProvider;

