import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* Action */
const AUTHENTICATE = 'auth/AUTHENTICATE';
const PROFILE_SYNC = 'auth/PROFILE_SYNC';

export const authenticate = createAction(AUTHENTICATE);
export const syncProfile = createAction(PROFILE_SYNC);

/* initialState */
const initialState = Map({
    user: null,
    profile: Map({
        username: null,
        displayName: null,
        thumbnail: null,
    }),
    profileSync: false,
});

export default handleActions({
    [AUTHENTICATE]: (state, action) => {
        const user = action.payload;
        console.log('user :: ', user);

        return state.set('user', user);
    },
    [PROFILE_SYNC]: (state, action) => {
        // 프로필 정보를 동기화
        const profile = action.payload;
        if(profile === null) {
            return state.merge({
               profileSync: true,
               profile: initialState.get('profile'), 
            });
        }
        return state.merge({
            profileSync: true,
            profile
        });
    },
}, initialState);