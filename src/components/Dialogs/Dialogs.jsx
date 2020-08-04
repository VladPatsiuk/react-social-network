import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
  console.log(props)
  let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  let messagesElements = props.messages.map(message => <Message key={message.id} message={message.message} />)
  let newMessageBody = props.newMessageBody

  const handleClick = () => {
    
    props.sendMessage();
  }

  const onNewMessageChange =(event) => {
    let body = event.target.value;
    props.changeMessage(body)
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
        <div>
          <div>
          <textarea value={newMessageBody} onChange={onNewMessageChange} />
          </div>
          <button onClick={handleClick}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;