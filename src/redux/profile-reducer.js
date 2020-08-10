import { profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const DELETE_POST = "DELETE_POST"
const SET_PROFILE_INFO = "SET_PROFILE_INFO"
const SET_STATUS = "SET_STATUS"

let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 23},
    {id: 2, message: "Yo", likesCount: 23},
    {id: 3, message: "How are you", likesCount: 23},
  ],
  status: "",
  profileInfo: null
}

const profileReducer = (state = initialState,action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        message: action.text,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        currentPostText: ""
      }
    }
    case SET_PROFILE_INFO: {
      return {
        ...state,
        profileInfo: action.profileInfo
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id != action.postId)
      }
    }
    default :
      return state
    }
}

export const addPost = (text) => {
  return {
    type: ADD_POST,
    text: text
  }
}
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId
  }
}

export const setProfileInfo = (profileInfo) => {
  return {
    type: SET_PROFILE_INFO,
    profileInfo: profileInfo
  }
}
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status
  }
}

export const getProfileData = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId)
    dispatch(setProfileInfo(response))
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if (response.resultCode === 0)
      dispatch(setStatus(status)) 
}

export default profileReducer;