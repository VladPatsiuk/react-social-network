import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form"

const SET_AUTH_DATA = "samurai-network/auth/SET_AUTH_DATA"

let initialState = {
  id: null,
  email: null, 
  login: null,
  isAuthorized: false
}

const authReducer = (state = initialState,action) => {
  switch (action.type) {
    case SET_AUTH_DATA: {
      return {
        ...state,
        ...action.data,
        isAuthorized: action.isAuth
      }
    }
    default :
      return state
    }

}

export const setUserAuthData = (data, isAuth) => {
  return {type: SET_AUTH_DATA, data, isAuth}}

export const getUserAuthData = () => async (dispatch) => {
  let response = await authAPI.authUser()
    if (response.resultCode === 0) {
      dispatch(setUserAuthData(response.data, true))  
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {

  let response = await authAPI.login(email, password, rememberMe)
    if (response.resultCode === 0) {
      dispatch(getUserAuthData())  
    } else {
      console.log(response)
      let message = response.messages.length > 0 ? response.messages[0] : "Some error" 
      dispatch(stopSubmit('login', {_error: message}))
    }
}
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout()
    if (response.resultCode === 0) {
      dispatch(setUserAuthData({id:null, email:null, login:null}, false))  
    }
}

export default authReducer;