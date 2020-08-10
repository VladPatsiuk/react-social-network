import { usersAPI } from "../api/api"
import {updateObjectInArray} from '../utils/objects-helpers'
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE__FETCHING = 'TOGGLE__FETCHING'
const TOGGLE__FOLLOWING_FETCHING = 'TOGGLE__FOLLOWING_FETCHING'
//action types constants

let initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  usersPerPage: 50,
  isFetching: true,
  isFollowingFetching: []
}

let usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      { 
        return {
          ...state, 
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
        
      }
    } 
    case UNFOLLOW:
      { 
        return {
          ...state, 
          users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      }
    }
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      }
    }
    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case TOGGLE__FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }
    case TOGGLE__FOLLOWING_FETCHING: {
      return {
        ...state,
        isFollowingFetching: action.isFetching ?
        [...state.isFollowingFetching, action.userId] :  
        state.isFollowingFetching.filter(el => el !== action.userId)
      }
    }
    default: 
      return state
  }
}

// action creators
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setFetching = (isFetching) => ({type: TOGGLE__FETCHING, isFetching})
export const setFollowingFetching = (isFetching, userId) => ({type: TOGGLE__FOLLOWING_FETCHING, isFetching, userId})
// export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count})
export const setNewPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})

const followUnfollowFlow = async (dispatch, userId, APImethod, actionCreator) => {
  dispatch(setFollowingFetching(true, userId))
  let result = await APImethod(userId)
  if (result.resultCode === 0) {
    dispatch(actionCreator(userId))
    dispatch(setFollowingFetching(false, userId))
  }
}


export const follow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.follow, followAC)
  }

}
export const unfollow = (userId) => {
  return async (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowAC)
  }
}
export const loadUsers = (page, usersPerPage) => {
  return async (dispatch) => {
    dispatch(setFetching(true))
    let data = await usersAPI.getUsers(page, usersPerPage)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setFetching(false))
    dispatch(setNewPage(page))
  }
}


export default usersReducer