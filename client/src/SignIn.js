import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import LoginCtl from './login_ctl';
import { API_BASE } from "./conf";

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);

  const [error, setError] = useState('');

  const submitForm = () => {
    const url = `${API_BASE}/signin`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password
      }), 
    })
    .then((res) => res.json())
    .then((data) => {
      if (data.error){
        setError(data.error)
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
    }).catch((error) => {
      // console.error('error:', error);
      setError(error)
    });

  }


  const onEmailChange = (e) => {
    setEmailValidity(e.target.checkValidity());
    setEmail(e.target.value);
  }

  const onEnterKeyUp = (e) => {
    e.preventDefault();
    if (e.key == "Enter"){
      submitForm();
    }
    
  }

  return (
    <>
    <div className="sign-in form sm">
      <h1>Sign In</h1>
      <div className="pd-tb">
      </div>
      <div className="field">
        <label htmlFor="email">
          Email
        </label> 
        <input
          type="email"
          autoComplete="on"
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
        <label htmlFor="password">
          Password
        </label> 
        <input
          type="password"
          className="form-control"
          required="required"
          aria-required="true"
          value={ password }
          onChange={ e => setPassword(e.target.value)}
          onKeyUp={ onEnterKeyUp }
          placeholder={ "Password" }
        />
      </div>
      { error && 
        <div className="pd-tb">
          <span className="error">{ error }</span>
        </div>
      }
      <div className="pd-tb">
        <input onClick={ submitForm } type="submit" name="submit" disabled={!(emailValidity && emailValidity)} />
      </div>
      <div className="pd-tb">
        <Link to="/user/sign_up" >
          Sign Up
        </Link>
      </div> 
    </div>  
    
    </>
  );
}

export default SignIn;
