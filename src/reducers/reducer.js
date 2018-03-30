import * as actionTypes from './../constants/action-types';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    const count = state.counter;
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            console.log("actionTypes.INCREMENT");
            return {
                counter: count + 1
            }
        default:
            console.log("default time");
        	return state;
    }
};

export default reducer;