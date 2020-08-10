import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader';

//import DialogsContainer from './components/Dialogs/DialogsContainer';``
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

    render () {
      if (!this.props.initialized)
        return <Preloader />

      return (
        <div className='app-wrapper'>
          <HeaderContainer/>
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/dialogs"
              render={() =>  { return <React.Suspense fallback={<div>Loading</div>}>
                                        <DialogsContainer />
                                      </React.Suspense >
              }} />
            <Route path="/profile/:userId?" 
              render={() => <ProfileContainer />} />
            <Route path="/users" 
              render={() => <UsersContainer />} />
            <Route path="/login" 
              render={() => <Login />} />
          </div>
            
        </div>
    );
    }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
