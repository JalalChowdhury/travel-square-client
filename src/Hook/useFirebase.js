import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup,
     GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
initializeAuthentication();


const useFirebase = () =>{
        const [user,setUser] = useState({});
        const [error,setError] = useState('');

        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const signInUsingGoogle = () => {
            signInWithPopup(auth, googleProvider)
              .then( (result) => {
                  console.log(result.user);
                  setUser(result.user);
                // const user = result.user;
              })
              .catch(err =>{
                  setError(err.message)
              })
        }

        const logout =() =>{
            signOut(auth)
              .then( () => {
                  setUser({});
              })
        }

        useEffect( () =>{
            onAuthStateChanged(auth, user=>{
                if(user){
                    console.log("inside state change" , user);
                    setUser(user);
                }
            })
        },[])
        return{
            user,
            error, 
            logout,
            signInUsingGoogle 
        }

}
export default useFirebase ;