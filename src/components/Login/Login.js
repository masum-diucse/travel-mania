import React, { useContext } from 'react';
import Header from '../Header/Header';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Button, Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const { register, handleSubmit, watch, errors } = useForm();
    var googleProvider = new firebase.auth.GoogleAuthProvider();
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn=() => {
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {    
            const  {displayName} = result.user;
            const signedInUser={signedInUser:true,name:displayName};
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch((error) => {
            console.log(error)
        });
            }
    const handleFacebookSignIn=() => {
        firebase
  .auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
    const  {displayName}  = result.user;
    const signedInUser={signedInUser:true,name:displayName};
    setLoggedInUser(signedInUser);
    history.replace(from);
  })
  .catch((error) => {
    console.log(error)
  });
    }
    const onSubmit = data => {
        console.log(data)
        
    };
    return (
        <div >
            <Header></Header>
            <div>
            <Card style={{ width: '30rem'}} >
                <Button onClick={handleGoogleSignIn} variant="success">Google</Button> 
                <Button onClick={handleFacebookSignIn} variant="primary">Facebook</Button> 
            </Card>
            </div>
        </div>
    );
};

export default Login;