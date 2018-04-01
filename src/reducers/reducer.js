import * as actionTypes from './../constants/action-types';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    const count = state.counter;
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return {
                counter: count + 1
            }
        case actionTypes.DECREMENT:
            return {
                counter: count - 1
            }
        default:
        	return state;
    }
};

export default reducer;