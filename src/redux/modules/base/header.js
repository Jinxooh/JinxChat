import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* Action */
const EXAMPLE = 'base/header/EXAMPLE';
 
export const example = createAction(EXAMPLE);

/* initialState */
const initialState = Map({
    something: true
});

export default handleActions({
    [EXAMPLE]: (state, action) => (
        state.set('something', action.payload)
    ),
}, initialState);