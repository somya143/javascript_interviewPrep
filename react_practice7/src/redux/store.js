import { legacy_createStore,applyMiddleware,combineReducers,compose } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import { petReducer } from "./pet/petReducer";

const rootReducer = combineReducers({
    auth : authReducer,
    pet : petReducer
});

const createComposer = window.__REDUX_DEVTOOLs_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer , createComposer(applyMiddleware(thunk)))