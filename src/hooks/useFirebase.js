import React, { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLogin, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggle = (e) => {
    setLogin(e.target.checked);
  };

  // get the email

  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  // google sign in

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //conditional function call
  const handleRegistration = (e) => {
    e.preventDefault();

    isLogin
      ? createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          })
      : signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });
  };
  //logout

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    handleEmail,
    handlePassword,
    toggle,
    user,
    error,
    isLogin,
    handleRegistration,
    loginWithGoogle,
    logOut,
  };
};

export default useFirebase;
