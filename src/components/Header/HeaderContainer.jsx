import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logout} from '../../redux/auth-reducer'
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class HeaderContainer extends React.Component {

  

  render () {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.isAuthorized,
  id: state.auth.id,
  login: state.auth.login,
  email: state.auth.email,
})

export default compose(
  connect(mapStateToProps, {logout}),
  withRouter
)(HeaderContainer);