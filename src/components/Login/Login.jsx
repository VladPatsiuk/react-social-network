import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../common/FormControls/FormControls'
import { requiredField } from '../../utils/validators'
import {login} from '../../redux/auth-reducer'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import classes from '../common/FormControls/FormControls.module.css'

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }
  console.log(props)
  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (

    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={Input} name={'email'} validate={[requiredField]} placeholder="Login"/>
      </div>
      <div>
        <Field component={Input} name={'password'} validate={[requiredField]} type="password" placeholder="Password"/>
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} validate={[]} type="checkbox"/> remember me
      </div>
      { error && <div className={classes.formSummaryError}>
        {error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const mapStatetoProps = (state) => {
  return {
    isAuth: state.auth.isAuthorized
  }
}

export default connect(mapStatetoProps, {login})(Login)