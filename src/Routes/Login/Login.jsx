import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState({})
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    
    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user
                setUser(loggedInUser)
                console.log(loggedInUser)
            }).catch(error => {
                console.log('error', error.message)
            }) 
    }

    const handleGoogleSingOut = () => {
        signOut(auth)
        .then((result) => {
            console.log(result)
            setUser(null)
        }).catch((error) => {
            console.log('error', error.message)
        })
    }
    return (
        <div>
            {
                
                user ? <button onClick={handleGoogleSingOut}>Sing Out</button> : <button onClick={handleGoogleSingIn}>Google Login</button> 
            }
            
            {
                user && <div>
                <h3>User Name: {user?.displayName}</h3>
                <h3>User Email: {user?.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default Login;