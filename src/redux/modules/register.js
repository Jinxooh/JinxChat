import { handleActions, createAction } from 'redux-actions';
import { Map } from 'immutable';
import Request, { requize, pend, fulfill, reject } from 'helpers/request';
import users from 'helpers/firebase/database/users';

/* actions */
// const USERNAME_CHECK = requize("register/USERNAME_CHECK");
const USERNAME_SET = requize("register/USERNAME_SET");
const USERNAME_CHECK = requize("register/USERNAME_CHECK");
const REGISTER = requize("register/REGISTER");
const SET_VALIDITY = "register/SET_VALIDITY";

/* action creators */
export const setUsername = ({uid, username}) => ({
    type: USERNAME_SET.DEFAULT,
    payload: {
        promise: users.setUsername({uid, username})
    }
});

export const checkUsername = (username) => ({
    type: USERNAME_CHECK.DEFAULT,
    payload: {
        promise: users.checkUsername(username)
    }
});

export const register = ({uid, thumbnail, displayName, email, username}) => ({
    type: REGISTER.DEFAULT,
    payload: {
        promise: users.create({uid, thumbnail, displayName, email, username})
    }
});

export const setValidity = createAction(SET_VALIDITY);

/* initialState */
const initialState = Map({
    requests: Map({
        checkUsername: Request(),
        setUsername: Request(),
        register: Request(),
    }),
    validation: {
        valid: true,
        message: '',
    }
});

/* reducer */
export default handleActions({ 
    // CHECK USERNAME
    [USERNAME_CHECK.PENDING]: (state, action) => {
        return pend(state, 'checkUsername');
    },
    [USERNAME_CHECK.FULFILLED]: (state, action) => {
        return fulfill(state, 'checkUsername');
    },
    [USERNAME_CHECK.REJECTED]: (state, action) => {
        const error = action.payload;
        return reject(state, 'checkUsername', error);
    },

    // SET USERNAME
    [USERNAME_SET.PENDING]: (state, action) => {
        console.log('set pending');
        return pend(state, 'setUsername');
    },
    [USERNAME_SET.FULFILLED]: (state, action) => {
        return fulfill(state, 'setUsername')
    },
    [USERNAME_SET.REJECTED]: (state, action) => {
        const error = action.payload;
        return reject(state, 'setUsername', error);
    },

   // REGISTER
   [REGISTER.PENDING]: (state, action) => {
       return pend(state, 'register');
   },
   [REGISTER.FULFILLED]: (state, action) => {
       return fulfill(state, 'register');
   },
   [REGISTER.REJECTED]: (state, action) => {
       const error = action.payload;
       return reject(state, 'register', error);
   },
   [SET_VALIDITY]: (state, action) => {
        const { valid, message } = action.payload;
    
        return state.mergeIn(['validation'], {
            valid,
            message: (!message) ? '' : message
        });
    },
}, initialState);