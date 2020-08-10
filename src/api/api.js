import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '5b63c9e1-8107-4f6f-baca-24745d5c59bc' 
  }
})

export const usersAPI = {
  getUsers(page, count) {
    return instance.get(`users?page=${page}&count=${count}`)
      .then(response => response.data)
  },
  unfollow(userId) {
    return instance.delete('follow/' + userId)
      .then(response => response.data)
  },

  follow(userId) {
    return instance.post(`follow/${userId}`,{})
      .then(response => response.data)
  }
}

export const authAPI = {
  authUser() {
    return instance.get("auth/me")
      .then(response => response.data)
  },
  login(email, password, rememberMe) {
    return instance.post("auth/login" , {
      email, password, rememberMe
    })
      .then(response => response.data)
  },
  logout() {
    return instance.delete("auth/login")
      .then(response => response.data)
  },
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => {
        return response.data
      } )
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
      .then(response => {
        return response.data
      } )
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status})
      .then(response => {
        return response.data
      } )
  },
}