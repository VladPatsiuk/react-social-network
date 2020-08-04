import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import * as axios from "axios";
import {stupid} from '../../redux/profile-reducer'
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
          .then(response => {
            this.props.setProfileInfo(response.data)
          })
  }

  render() {
    return (
      <Profile {...this.props} />
    );
  }
  
};

const mapStatetoProps = (state) => (
  {
    profileInfo: state.profilePage.profileInfo
  }
)

const withURLHandlingComponent = withRouter(ProfileContainer)

export default connect(mapStatetoProps, {setProfileInfo: stupid })(withURLHandlingComponent);
