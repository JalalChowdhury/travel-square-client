import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initialize";
import {
    getAuth, signInWithPopup,
    GoogleAuthProvider, onAuthStateChanged, signOut , updateProfile
} from "firebase/auth";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading , setIsLoading] =useState(true)
    
    // const [error, setError] = useState('');

   
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // 
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth , (user)=> {
        //    console.log(user);
             if(user){
                  
                 setUser(user)
             } else{
                 setUser({})
             }
             setIsLoading(false)
        })
         return ()=> unsubscribe()
   },[])
    

    // const signInUsingGoogle = () => {
    //     signInWithPopup(auth, googleProvider)
    //         .then((result) => {
    //             console.log(result.user);
    //             setUser(result.user);

    //             //optional
    //             // localStorage.setItem('user', JSON.stringify(user))
    //             // const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
                
    //             // setUser(localUser? { "user": localUser }:null);

            
    //         })
    //         .catch(err => {
    //             setError(err.message)
    //         })
    // }
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const updateName= (name)=> {
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
          const newUser={...user, displayName: name} // recommend
         setUser(newUser)
          
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
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
        user,setUser,
        setIsLoading,
        logout,
        signInUsingGoogle
    }

}
export default useFirebase;