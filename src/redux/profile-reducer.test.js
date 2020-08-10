const { default: profileReducer, addPost, deletePost } = require("./profile-reducer");

let state = {
  posts: [
    {id: 1, message: "Hi", likesCount: 23},
    {id: 2, message: "Yo", likesCount: 23},
    {id: 3, message: "How are you", likesCount: 23},
  ]
}

it('length of post should be incremented', () => {
  // 1. Test data
  let action = addPost('new');
  
  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectations
  expect(newState.posts.length).toBe(4)
})

it('message of last added post should be correct', () => {
  // 1. Test data
  let action = addPost('new');
  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectations
  expect(newState.posts[3].message).toBe("new")
})

it('length after deleting should be decremented', () => {
  // 1. Test data
  let action = deletePost(1);
  // 2. action
  let newState = profileReducer(state, action)

  // 3. expectations
  expect(newState.posts.length).toBe(2)
})

