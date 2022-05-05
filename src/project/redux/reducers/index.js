import { combineReducers } from "redux";
import {addDeveloper} from './reducer'

export const allReducers=combineReducers({
   data:addDeveloper
})