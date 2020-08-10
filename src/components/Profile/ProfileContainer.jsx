import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getProfileData, setProfileInfo, getStatus, updateStatus} from '../../redux/profile-reducer'
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import { compose } from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authUserId
      if (!userId) {
        this.props.history.push('/login')
      }
    }
    
    this.props.getProfileData(userId)
    this.props.getStatus(userId)
  }

  render() {
    console.log('Profile render!')
    return (
      <Profile {...this.props} />
    );
  }
  
};

const mapStatetoProps = (state) => (
  {
    profileInfo: state.profilePage.profileInfo,
    status: state.profilePage.status,
    authUserId: state.auth.id
  }
)

export default compose(
  withRouter,
  connect (mapStatetoProps, {setProfileInfo, getProfileData, getStatus, setStatus: updateStatus }) 
)(ProfileContainer)