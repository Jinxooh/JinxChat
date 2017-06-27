import * as firebase from 'firebase';

const auth = (function() {
    return {
        facebook: () => {
            const provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('user_birthday');
            return firebase.auth().signInWithPopup(provider);
        },
        google: () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/plus.login'); 
            return firebase.auth().signInWithPopup(provider);
        },
        logout: () => {
            return firebase.auth().signOut();
        },
        authStateChanged: (callback) => {
            firebase.auth().onAuthStateChanged(callback);
        }
    }
})();

export default auth;