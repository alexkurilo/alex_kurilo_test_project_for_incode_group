const initialState = "";

export default function findPerson (state = initialState, action){
    switch (action.type) {
        case "FIND_PERSON":
            return action.findPerson;
        default:
            return state;
    }
}