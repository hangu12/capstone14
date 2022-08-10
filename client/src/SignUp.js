import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import API from './api';
import { API_BASE } from "./conf";

export const SignUp = (props) => {
  
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [emailValidity, setEmailValidity] = useState(false);
  const [usernameValidity, setUsernameValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [passwordConfirmValidity, setPasswordConfirmValidity] = useState(false);

  const submitForm = () => {

    const url = `${API_BASE}/signup`;
    API.post(url, {
      username: username,
      email: email,
      phone: phone,
      password: password
    })
    .then((data) => {
      if (data.error){
        return;
      }

      const user = {
        _id: data._id,
        username: data.username,
        email: data.email,
        phone: data.phone,
        accessToken: data.accessToken
      }
      LoginCtl.loggedInAs(user);
    });
  }

  const formValid = () => (
    usernameValidity && emailValidity && passwordValidity && passwordConfirmValidity
  )

  const onEmailChange = (e) => {
    e.target.reportValidity();
    setEmailValidity(e.target.checkValidity());
    setEmail(e.target.value);
  }

  const onUsernameChange = (e) => {
    setUsernameValidity(e.target.checkValidity());
    setUsername(e.target.value);
  }

  const onPasswordChange = (e) => {
    e.target.reportValidity()
    setPasswordValidity(e.target.checkValidity());
    setPassword(e.target.value);
  }

  const onPasswordConfirmChange = (e) => {
    e.target.reportValidity();
    if (password == e.target.value){
      setPasswordConfirmValidity(true);
    }else {
      setPasswordConfirmValidity(false);
    }
    setPasswordConfirm(e.target.value);
  }

  return (
    <>
    <div className="sign-in form sm">
      <h1>Sign In</h1>
      <div className="pd-tb">
      </div>
      <div className="field">
        <label htmlFor="username">
          Username
        </label> 
        <input
          type="text"
          className="form-control"
          required="required"
          aria-required="true"
          value={ username }
          onChange={ onUsernameChange }
          placeholder={ "Username" }
        />
      </div>
      <div className="field">
        <label htmlFor="email">
          Email
        </label> 
        <input
          type="email"
          className="form-control"
          required="required"
          aria-required="true"
          pattern= ".+@.+"
          value={ email }
          onChange={ onEmailChange }
          placeholder={ "Email" }
        />
      </div>
      <div className="field">
        <label htmlFor="phone">
          Phone
        </label> 
        <input
          type="phone"
          className="form-control"
          value={ phone }
          onChange={ (e) => { setPhone(e.target.value) } }
          placeholder={ "Phone (Optional)" }
        />
      </div>
      <div className="field">
        <label htmlFor="password">
          Password
        </label> 
        <input
          type="password"
          className="form-control"
          required="required"
          aria-required="true"
          value={ password }
          onChange={ onPasswordChange }
          placeholder={ "Password" }
        />
      </div>
      <div className="field">
        <label htmlFor="password_confirm">
          Password Confirm
        </label> 
        <input
          type="password"
          className="form-control"
          required="required"
          aria-required="true"
          value={ passwordConfirm }
          onChange={ onPasswordConfirmChange }
          placeholder={ "Confirm Password" }
        />
      </div>
      <div className="pd-tb">
        <input onClick={ submitForm } type="submit" name="submit" disabled={!formValid()} />
      </div>
      <div className="pd-tb">
        <Link to="/user/sign_in" >
          Sign In
        </Link>
      </div> 
    </div>  
    
    </>
  );
}

export default SignUp;
