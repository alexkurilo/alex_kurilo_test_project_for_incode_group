const initialState = {};

export default function findPersonData (state = initialState, action){
    switch (action.type) {
        case "SELECT_PERSON":
            return action.findPersonData;
        default:
            return state;
    }
}