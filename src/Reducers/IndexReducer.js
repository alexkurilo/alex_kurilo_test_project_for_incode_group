import {combineReducers} from 'redux';

import listArr from "./AddListReducer";
import findPersonData from "./SelectPersonReducer";
import findPerson from "./FindPersonReducer";

export default combineReducers({
    listArr,
    findPersonData,
    findPerson
})