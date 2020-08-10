import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        state: this.props.status
      })
    }
  }

  onChange =(e) => {
    this.setState({
      status: e.target.value
    })
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }
  deactivateEditMode() {
    this.setState({
      editMode: false,
      status: this.props.status
    })
    this.props.setStatus(this.state.status)
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span autoFocus={true} onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "---"}</span>
          </div>
        }
        {
          this.state.editMode &&
          <div>
            <input onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} onChange={this.onChange}></input>
          </div>
        }
      </div>  
    )
  }
  
}

export default ProfileStatus;