import { connect } from "react-redux";
import Users from "./Users";
import { toggleFollow, setUsers, setTotalUsersCount, setNewPage, setFetching } from "../../redux/users-reducer";
import React from 'react';
import * as axios from 'axios'
import Preloader from "../common/Preloader";

class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${this.props.currentPage}`)
          .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setFetching(false)
          } 
    )
  }

  onPageChange = (page) => {
    this.props.changePage(page)
    this.props.setFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerPage}&page=${page}`)
          .then(response => {
            this.props.setUsers(response.data.items)
            this.props.setFetching(false)
          } )
  }


  render()  {
    return (
      <>
      {this.props.isFetching && <Preloader />}
      <Users onPageChange={this.onPageChange}
              toggleFollow={this.props.toggleFollow}
              totalUsersCount={this.props.totalUsersCount}
              usersPerPage={this.props.usersPerPage}
              currentPage={this.props.currentPage}
              users={this.props.users}
              />
      </>
    )
}
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    totalUsersCount: state.usersPage.totalUsersCount,
    usersPerPage: state.usersPage.usersPerPage,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, 
  {
    toggleFollow,
    setFetching,
    setUsers,
    setTotalUsersCount,
    changePage:setNewPage
  }
  )(UsersContainer)