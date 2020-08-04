import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post key={post.message} message={post.message} likes={post.likesCount}/>)

  const onAddPost = () => {
    props.addPost()
    console.log(props.addPost)
  }

  const handleTextAreaChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  const newPostElement = React.createRef();
  return (
    <div>
      <div className={classes.postsBlock}>
        My posts
        <div>
          <div>
          <textarea ref={newPostElement} onChange={handleTextAreaChange} value={props.newPostText} />
          </div>
          <div>
          <button onClick={onAddPost}>Add post</button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}        
      </div>
    </div>
  );
};

export default MyPosts;
