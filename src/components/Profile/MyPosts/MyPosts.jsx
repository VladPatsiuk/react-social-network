import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div className={classes.postsBlock}>
        My posts
        <div>
          <div>
          <textarea></textarea>
          </div>
          <div>
          <button>Add post</button>
          </div>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message="HI, how are you?" likes={15}/>
        <Post message="ehhh" likes={20}/>
        
      </div>
    </div>
  );
};

export default MyPosts;
