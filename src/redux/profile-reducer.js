const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD_POST"
const SET_PROFILE_INFO = "SET_PROFILE_INFO"


let initialState = {
  posts: [
    {id: 1, message: "Hi", likesCount: 23},
    {id: 2, message: "Yo", likesCount: 23},
    {id: 3, message: "How are you", likesCount: 23},
  ],
  currentPostText: "",
  profileInfo: null
}

const profileReducer = (state = initialState,action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.currentPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost],
        currentPostText: ""
      }
    }
      
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        currentPostText: action.newText
      }
    }
    case SET_PROFILE_INFO: {
      return {
        ...state,
        profileInfo: action.profileInfo
      }
    }
      
    default :
      return state
    }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const stupid = (profileInfo) => {
  return {
    type: SET_PROFILE_INFO,
    profileInfo: profileInfo
  }
}

export default profileReducer;