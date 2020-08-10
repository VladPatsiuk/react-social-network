import React, {useState, useEffect} from 'react';

const ProfileStatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.setStatus(status)

  }

  const onChange =(e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {!editMode &&
        <div>
          <span autoFocus={true} onDoubleClick={activateEditMode}>{props.status || "---"}</span>
        </div>
      }
      {
        editMode &&
        <div>
          <input onBlur={deactivateEditMode} value={status} onChange={onChange}></input>
        </div>
      }
    </div>  
  )

}

export default ProfileStatusWithHooks;