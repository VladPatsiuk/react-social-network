import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div>
        <Post message="HI, how are you?" likes={15}/>
        <Post message="ehhh" likes={20}/>
        
      </div>
    </div>
  );
};

export default MyPosts;
