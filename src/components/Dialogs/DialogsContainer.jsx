import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


// const DialogsContainer = (props) => {

//   return (
//     <StoreContext.Consumer> 
//       {
//         (store) => {
//           let state = store.getState().dialogsPage;

//           const handleClick = () => {
//             store.dispatch(sendMessageCreator())
//           }

//           const onNewMessageChange =(body) => {
//             store.dispatch(updateNewMessageBodyCreator(body))
//           }

//           return (
//               <Dialogs handleClick={handleClick} 
//                 changeMessage={onNewMessageChange} 
//                 dialogs = {state.dialogs} 
//                 messages={state.messages} 
//                 newMessageBody={state.newMessageBody}/>
//           )
//         }
//       }
//     </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  let dialogsPage = state.dialogsPage;
  return {
    dialogs: dialogsPage.dialogs,
    messages: dialogsPage.messages,
    newMessageBody: dialogsPage.newMessageBody
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    },

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;