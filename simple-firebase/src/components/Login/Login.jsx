import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const auth = getAuth(app);
    console.log(auth);
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const LoginWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
               console.log(error.message);
            });
    }

    const handleSingOut = () =>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error =>{
            console.log(error.message);
         })
    }


    const LoginWithGithub = () =>{
        signInWithPopup(auth, gitHubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
            setUser(user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div>
            <h1>Hello I am login from</h1>
            <div>
                {
                    user ? 
                        <button onClick={handleSingOut}>Sign Out</button> :

                        <div>
                            <button onClick={LoginWithGoogle}>Login With Google</button>

                            <button onClick={LoginWithGithub}>Login With GitHub</button>
                        </div>
                }
            </div>
            {
                user && 
                <div>
                    <h2>User:- {user.displayName}</h2>
                    <h3>Email:- {user.email}</h3>
                        <img src={user.photoURL} alt={user.displayName}/>
                </div>
            }
        </div>
    );
};

export default Login;