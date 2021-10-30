import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth, signInWithPopup,
    GoogleAuthProvider, onAuthStateChanged, signOut
} from "firebase/auth";
// import { useHistory, useLocation } from "react-router";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // const history = useHistory();
    // const location = useLocation();

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // decleare after login location 
    // const { from } = location.state || { from: { pathname: "/" } };

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);

                //optional
                // localStorage.setItem('user', JSON.stringify(user))
                // const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
                
                // setUser(localUser? { "user": localUser }:null);

                // history.push(from);

            })
            .catch(err => {
                setError(err.message)
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log("inside state change", user);
                setUser(user);
            }
        })
    }, [])
    return {
        user,
        error,
        logout,
        signInUsingGoogle
    }

}
export default useFirebase;