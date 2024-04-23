import { info } from 'autoprefixer';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import PropTypes from 'prop-types'

export const userContext = createContext(null);

const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    
    const userLogin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const forgetPassword = (email) =>{
        setLoading(true);
        return sendPasswordResetEmail(auth,email)
    };
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setLoading(false);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    const LogOut = () => {
        return signOut(auth);
    }
    const contextInFo = {
        user,
        createUser,
        forgetPassword,
        userLogin,
        LogOut,
        loading,
    }

    
    return (
        <userContext.Provider value={contextInFo}>
            {
                children
            }
        </userContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default UserProvider;