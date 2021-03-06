import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from 'redux-thunk'
import {reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});


let store = createStore(reducers, composeWithDevTools(applyMiddleware(ThunkMiddleware)));
window.store = store;

export default store;