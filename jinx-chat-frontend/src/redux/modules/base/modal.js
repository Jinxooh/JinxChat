import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

/* Action */
// prefix for duplication
const MODAL_OPEN = 'base/modal/MODAL_OPEN';
const MODAL_CLOSE = 'base/modal/MODAL_CLOSE';
 
export const modalOpen = createAction(MODAL_OPEN);
export const modalClose = createAction(MODAL_CLOSE);

/* initialState */
const initialState = Map({
    login: Map({
        open: false,
    }),
    linkAccount: Map({
        oepn: false,
    }),
});

/* reducer */
export default handleActions({
    [MODAL_OPEN]: (state, action) => {
        // modal name ' open modal '
        /*{
            modalName,
            data
        }*/
        const { modalName, data } = action.payload;
        return state.mergeIn([modalName], {
            open: true,
            ...data
        })
    },
    [MODAL_CLOSE]: (state, action) => {
        // modal name ' close modal '
        const modalName = action.payload;
        return state.setIn([modalName, 'open'], false);
    },
}, initialState);