import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
        <div>New Post</div>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;
