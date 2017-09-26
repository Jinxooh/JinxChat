import * as firebase from 'firebase';

export function createProfile({uid, photoURL, displayName, username}) {
  return firebase.database().ref('profiles/' + uid).set({
    photoURL,
    displayName,
    username,
  })
}