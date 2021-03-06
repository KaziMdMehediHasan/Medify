import React, { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useHistory } from "react-router-dom";

initializeAuthentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const [isLogin, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

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
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   const user = result.user;
    //   setUser(user);
    //   history.push("/");
    // })
    // .catch((error) => {
    //   setError(error.message);
    // });
  };

  //conditional function call
  const handleRegistration = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return;
    }

    isLogin
      ? createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            setError("");
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
            setError("");
          })
          .catch((error) => {
            console.log(error.message);
            setError(error.message);
          });

    // clean the fields
  };

  // observe signed in user

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  });
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
