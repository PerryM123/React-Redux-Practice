import * as actionTypes from './../actions/action';

const initialState = {
    counter: 0
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.INCREMENT:
            return {
                count: state.counter + 1
            }
        default:
        	return state;
        /*case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,
                counter: state.counter.concat( newPerson )
            }*/
        /*case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                counter: state.counter.filter(person => person.id !== action.personId)
            }*/
    }
};

export default reducer;