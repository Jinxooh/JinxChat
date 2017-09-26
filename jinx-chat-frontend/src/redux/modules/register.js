import { handleActions } from 'redux-actions';
import { Map } from 'immutable';
import Request, { requize, pend, fulfill, reject } from 'helpers/request';
import * as users from 'helpers/firebase/database/users';
import * as profiles from 'helpers/firebase/database/profiles';

/* actions */
const REGISTER = requize("register/REGISTER");

/* action creators */
// export const registerRequest = createAction(REGISTER_REQUEST);
export const register = ({uid, photoURL, displayName, username}) => ({
    type: REGISTER.DEFAULT,
    payload: {
        promise: profiles.createProfile({uid, photoURL, displayName, username})
    }
});

/* initialState */
const initialState = Map({
    request: Map({
        register: Request()
    })
});

/* reducer */
export default handleActions({ 
   // REGISTER
   [REGISTER.PENDING]: (state, action) => {
       return pend(state, 'register');
   },
   [REGISTER.FULFILLED]: (state, action) => {
       const data = action.payload;
        console.log(data);
       return fulfill(state, 'register')
   },
   [REGISTER.REJECTED]: (state, action) => {
       const error = action.payload;
       return reject(state, 'register', error);
   }
}, initialState);