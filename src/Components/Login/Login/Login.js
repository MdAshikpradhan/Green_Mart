import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../../App';
import firebaseConfig from './FirebaseConfig';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';


const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email } = result.user;
      const signedInUser = { name: displayName, email }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-center align-items-center googleLoginBtn">
                <button className="brandBtn" onClick={handleGoogleSignIn}>Sign In Google</button>
            </div>
            <Footer />
        </div>
    );
};

export default Login;