import {createSelector} from 'reselect'

export const getUsers = state => state.usersPage.users

export const getUsersSelector = state => getUsers(state).filter(u => true)

export const getUsersSuperSelector = createSelector(getUsers, (users) => users.filter(u => true))

export const getTotalUsersCount = state => state.usersPage.totalUsersCount

export const getUsersPerPage = state => state.usersPage.usersPerPage

export const getСurrentPage = state => state.usersPage.currentPage


