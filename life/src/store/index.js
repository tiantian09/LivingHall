import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux-immutable";

const reducers=combineReducers({
    
})
 
const store=createStore(reducers,applyMiddleware(thunk))

export default store;