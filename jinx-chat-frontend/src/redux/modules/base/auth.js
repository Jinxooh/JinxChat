import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* Action */
const AUTHENTICATE = 'auth/AUTHENTICATE';
 
export const authenticate = createAction(AUTHENTICATE);

/* initialState */
const initialState = Map({
    user: null
});

export default handleActions({
    [AUTHENTICATE]: (state, action) => {
        const user = action.payload;
        return state.set('user', user);
    }
}, initialState);