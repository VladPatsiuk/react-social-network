import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profileInfo={props.profileInfo} status={props.status} setStatus={props.setStatus}/>
      <MyPostsContainer/>
    </div>
  );
};

export default Profile;
