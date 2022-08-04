import React, { useState, useEffect } from 'react';

import LoginCtl from './login_ctl';

export const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);

  const submitForm = () => {

    const url = "https://usedproduct.herokuapp.com/api/product/62d8471c231c8aa8fb24b9c4";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {

        const user = {
          username: 'hangu',
          email: email,
          token: "fdfidfd"
        }
        LoginCtl.loggedInAs(user);

      });


  }
  useEffect(() => {
    console.log("SignIn mounted");
    // const url = "https://usedproduct.herokuapp.com/api/product/62d8471c231c8aa8fb24b9c4";

    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("fetcheddata is ", data);

    //     setItem({
    //       name: data.name,
    //       price: data.price,
    //       images: [
    //         "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216010698/658570596d14659e4949f55a1f32ddb9.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=df9683f92785a91c320eb80ceb7ae342",
    //         "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011129/7d0eefdaa928bcb024dfcb769444109a.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=9c2d3cc71c9261302b4a026dab44f35e",
    //         "https://pixl.varagesale.com/http://s3.amazonaws.com/hopshop-image-store-production/216011131/f31ee6c12b733988b2cb752bea42d236.jpg?_ver=large_uploader_thumbnail&w=640&h=640&fit=crop&s=65ca3f4e843361536ea19b28844cc551"
    //       ],
    //       // images: [data.image],
    //       description: data.description,
    //       seller: data.seller,
    //       available: data.available,
    //       wish: false
    //     })
    //   });

    return () => {
      console.log("Item unmounted");
    }
  }, [])


  const onEmailChange = (e) => {

    // e => setEmail(e.target.value)
    console.log("eee", e.target);
    console.log("checkValidity", e.target.checkValidity());
    console.log("reportValidity", e.target.reportValidity());
    setEmailValidity(e.target.checkValidity());
    setEmail(e.target.value);
  }

  return (
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
          className="form-control"
          required="required"
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
          value={ password }
          onChange={ e => setPassword(e.target.value)}
          placeholder={ "Password" }
        />
      </div>
      <div className="pd-tb">
        <input onClick={ submitForm } type="submit" name="submit" disabled={!(emailValidity && emailValidity)} />
      </div>
    </div>   
  );
}

export default SignIn;
