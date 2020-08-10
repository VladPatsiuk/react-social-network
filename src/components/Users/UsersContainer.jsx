import { connect } from "react-redux";
import Users from "./Users";
import { follow, unfollow, setUsers, setTotalUsersCount, setNewPage, loadUsers } from "../../redux/users-reducer";
import React from 'react';
import Preloader from "../common/Preloader";
import { getUsersSuperSelector, getTotalUsersCount, getUsersPerPage, getСurrentPage } from "../../redux/users-selectors";

class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, usersPerPage} = this.props
    this.props.loadUsers(currentPage, usersPerPage)
  }

  onPageChange = (page) => {
    const {usersPerPage} = this.props
    this.props.loadUsers(page, usersPerPage)
  }


  render()  {
    return (
      <>
      {this.props.isFetching && <Preloader />}
      <Users onPageChange={this.onPageChange}
              follow={this.props.follow}
              unfollow={this.props.unfollow}
              totalUsersCount={this.props.totalUsersCount}
              usersPerPage={this.props.usersPerPage}
              currentPage={this.props.currentPage}
              users={this.props.users}
              isFollowingFetching={this.props.isFollowingFetching}
              setFollowingFetching={this.props.setFollowingFetching}
              />
      </>
    )
}
}


const mapStateToProps = (state) => {
  return {
    users: getUsersSuperSelector(state),

    totalUsersCount: getTotalUsersCount(state),
    usersPerPage: getUsersPerPage(state),
    currentPage: getСurrentPage(state),

    isFetching: state.usersPage.isFetching,
    isFollowingFetching: state.usersPage.isFollowingFetching
  }
}

export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setUsers,
    setTotalUsersCount,
    changePage:setNewPage,
    loadUsers
  }
  )(UsersContainer)