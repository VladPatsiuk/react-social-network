import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from 'redux-form'
import { maxLength, requiredField } from "../../../utils/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const MyPosts = (props) => {
  let postsElements = props.posts.map(post => <Post key={post.message} message={post.message} likes={post.likesCount}/>)


  const onSubmit = (formData) => {
    console.log(formData.post)
    props.addPost(formData.post)
  }

  return (
    <div>
      <div className={classes.postsBlock}>
        My posts
        <AddPostReduxForm onSubmit={onSubmit}/>
      </div>
      <div className={classes.posts}>
        {postsElements}        
      </div>
    </div>
  );
};
const maxLength10 = maxLength(10)
const AddPostForm = (props) => {

  

  return (
    <form onSubmit={props.handleSubmit}>
        <div>
          <Field component={Textarea} name="post" validate={[requiredField, maxLength10]} />
        </div>
        <div>
          <button>Add post</button>
        </div>
    </form>
  )
}

const AddPostReduxForm = reduxForm({
  form: 'addPost'
})(AddPostForm)

export default MyPosts;
