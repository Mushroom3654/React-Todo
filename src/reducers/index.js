import {combineReducers} from "redux";
import colorReducer from './colorReducer';
import listReducer from './listReducer'

const reducer = combineReducers({
   colorReducer,
   listReducer,
});

export default reducer;