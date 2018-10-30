import {combineReducers} from 'redux';

import listArr from "./AddListReducer";
import personData from "./SelectPerson";

export default combineReducers({
    listArr,
    personData
})