import * as firebase from 'firebase';
import config from './config';
import authHelper from './auth';
import databaseHelper from './database';

const firebaseHelper = (
  () => {
    return {
      initialize: () => {
        firebase.initializeApp(config);

        const auth = firebase.auth();
        const database =firebase.database();
        
        authHelper.initalize(auth);
        databaseHelper.initialize(database);
      }
    }
  }
)();
 
export default firebaseHelper;
