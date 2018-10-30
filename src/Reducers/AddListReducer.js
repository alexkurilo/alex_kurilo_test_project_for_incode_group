const initialState = [];

export default function listArr (state = initialState, action){
    switch (action.type) {
        case "ADD_LIST":
            return [
                ...state,
                action.listArr
            ];

        default:
            return state;
    }
}