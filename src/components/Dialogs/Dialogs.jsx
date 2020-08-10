import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form'
import { Textarea } from '../common/FormControls/FormControls';
import { requiredField, maxLength } from '../../utils/validators';

const Dialogs = (props) => {
  
  let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  let messagesElements = props.messages.map(message => <Message key={message.id} message={message.message} />)

  const onSubmit = (formData) => {
    props.sendMessage(formData.message)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div>
        <div className={classes.messages}>
          {messagesElements}
        </div>
        <MessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}
const maxLength10 = maxLength(10)

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
      <Field component={Textarea} name="message" placeholder="Enter your message.."
      validate={[requiredField, maxLength10]}/>
      </div>
      <button>Send</button>
  </form>
  )
}

const MessageReduxForm = reduxForm({
  form: 'messageForm'
})(MessageForm)

export default Dialogs;