const initialState = {};

export default function personData (state = initialState, action){
    switch (action.type) {
        case "SELECT_PERSON":
            return action.personData;
        default:
            return state;
    }
}