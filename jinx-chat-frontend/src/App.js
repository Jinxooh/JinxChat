import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
  
  // state = {
  //   value: 0
  // }

  // componentDidMount(){
  //   // const db = firebase.database();

  //   // const rootRef = db.ref().child('react');
  //   // rootRef.on('value', snap => {
  //   //   this.setState({
  //   //     value: snap.val()
  //   //   })
  //   // });
   
  //  firebase.auth().onAuthStateChanged( firebaseUser => {
  //    if(firebaseUser) {
  //      console.log('logged in', firebaseUser);
  //    } else {
  //      console.log('Not logged in');
  //    }
  //  });
  // }

  // handleLogin = () => {
  //   // google login
  //   // const provider = new firebase.auth.GoogleAuthProvider();
  //   // provider.addScope('https://www.googleapis.com/auth/plus.login'); 
  //   // facebook login
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   provider.addScope('email');

  //   firebase.auth().signInWithPopup(provider).then(
  //     result => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const token = result.credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       // ...
  //       console.log('token ,', token);
  //       console.log('user ,', user);
  //   }).catch(error => {
  //     // Handle Errors here.
  //     console.log(error);
  //     const {code, message, email, credential} = error;

  //     console.log(code, message, email, credential);
  //     // ...
  //   });
  // }

  // handleLogout = () => {
  //   console.log('Log out!!!');
  // }

  render() {
    const { value } = this.state;
    const { handleLogin, handleLogout } = this;
    return (
      <div className="App">
        <h1>{value}</h1>
        {/*<button onClick={handleLogin}>GOOGLE LOGIN</button>
        <button onClick={handleLogin}>FACEBOOK LOGIN</button> 
        <button onClick={handleLogout}>LOGOUT</button>*/}
      </div>
    );
  }
}

export default App;
