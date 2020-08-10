const SEND_MESSAGE = "ADD_MESSAGE"

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
    case SEND_MESSAGE: {
      return { 
        ...state,
        messages: [...state.messages, {id: state.messages.length+1, message: action.message}]
      }
    } 
    default: 
      return state
  }
}

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message: message
  }
}

export default dialogsReducer