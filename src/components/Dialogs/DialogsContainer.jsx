import { sendMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from 'redux';

let mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    newMessageBody: state.dialogsPage.newMessageBody,
    isAuth: state.auth.isAuthorized
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {sendMessage})
  )(Dialogs);