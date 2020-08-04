const TOGGLE_FOLLOW = 'FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE__FETCHING = 'TOGGLE__FETCHING'
//action types constants

let initialState = {
  users: [],
  totalUsersCount: 0,
  currentPage: 1,
  usersPerPage: 50,
  isFetching: true
}

let usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FOLLOW:
      { 
        return {
          ...state, 
          users: state.users.map(u => 
            {
              if (u.id === action.userId)
                return {...u, followed: !u.followed}
              return u;              
            })}
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
    default: 
      return state
  }
}

// action creators
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setFetching = (isFetching) => ({type: TOGGLE__FETCHING, isFetching})
// export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: count})
export const setNewPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})


export default usersReducer