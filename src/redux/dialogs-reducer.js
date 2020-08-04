const SEND_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"

let initialState = {
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

const dialogsReducer = (state = initialState,action) => {

  switch(action.type) {
    
    case UPDATE_NEW_MESSAGE_BODY: {
      return { 
        ...state,
        newMessageBody: action.newMessage
      }

    }
    case SEND_MESSAGE: {
      let message = state.newMessageBody
      return { 
        ...state,
        newMessageBody: '',
        messages: [...state.messages, {id: 6, message: message}]
      }
    } 
      
    default: 
      return state
  }
}

export const sendMessageCreator = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageBodyCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessage: message
  }
}

export default dialogsReducer