import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer"


let store = {
  _state: { 
      profilePage: {
        posts: [
          {id: 1, message: "Hi", likesCount: 23},
          {id: 2, message: "Yo", likesCount: 23},
          {id: 3, message: "How are you", likesCount: 23},
        ],
        currentPostText: ""
      },
      messagesPage: {
        dialogs: [
          {id: 1, name: "Max"},
          {id: 2, name: "Sam"},
          {id: 3, name: "Alexander"},
          {id: 4, name: "Rich"}
        ],
        messages: [
          {id: 1, message: "Hi"},
          {id: 2, message: "Yo"},
          {id: 3, message: "How are you"},
        ],
      newMessageBody:  ""
    }
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    console.log('here')
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.currentPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.currentPostText = ""
    this._callSubscriber(this._state)
  },
  updatePost(message) {
    this._state.profilePage.currentPostText = message
    this._callSubscriber(this._state)
  },
  updateMessage(message) {
    
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);
  }
}




export default store;
window.store = store;