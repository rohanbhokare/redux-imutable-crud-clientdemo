import * as actionTypes from './actions';

const initialState = {
    message: 'Hello world!!!',
    persons: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // for unique values
                name: action.personData.name,
                age: action.personData.age
            }
            return {
                ...state,
                persons: state.persons.concat( newPerson )
            }
        case actionTypes.REMOVE_PERSON:
            return {
                ...state,
                persons: state.persons.filter(person => person.id !== action.personId)
            }
    }
    return state;
};

export default reducer;