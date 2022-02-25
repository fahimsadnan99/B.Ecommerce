import React, { useState } from "react";
import Layout from "../Layout";
import { useHistory, Link ,Redirect} from "react-router-dom";
import { errorStatus, loadingStatus } from "../../utils/Message"
import { Login } from "../../API/authApi"
import {authenticate,isAuthenticate,userInfo} from "../../utils/auth"
import Manu from "../Manu";

const About = () => {
  const history = useHistory();

   const [values, setValues] = useState({
  
     email: "",
     password: "",
     error: false,
     loading: false,
     disabled: false,
     success: false,
   });
   const {  email, password, error, loading, disabled, success } = values;
   const handleChange = (e) => {
     setValues({
       ...values,
       [e.target.name] : e.target.value,
       error: false,
       disabled: false,
       success: false,
     });
   };

  const handleSubmit = (e) => {
    e.preventDefault()
      setValues({
        ...values,
        [e.target.name]: e.target.value,
        error: false,
        disabled: true,
        loading: true,
        success: false,
      });
    
    Login({ email, password })
      .then(response => {
       
        authenticate(response.data.Token, () => {
            setValues({
              email: "",
              password: "",
              loading: false,
              disabled: false,
              success: true,
            });
        })
       
       
      })
      .catch(err => {
      let errorMsg = "Something Went Wrong";
      if (err.response) {
        errorMsg = err.response.data;
      } else {
        errorMsg = "Something Went Wrong";
      }
      setValues({
        ...values,
        error: errorMsg,
        loading: false,
        disabled: false,
        success: false,
      });
    })
    
    
    
  };

  const successState = () => {
    if (success) return <Redirect to={`${userInfo().role}/dashbord`}></Redirect>;
    if(isAuthenticate()) return <Redirect to="/"></Redirect>
    
  }
  
  return (
    <>
      <Manu></Manu>
    <Layout className="container" title="Login">
      <div className="row mt-5">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          {errorStatus(error, error)}
          {loadingStatus(loading)}
          {successState(success)}


          <h4>Login Your Accaout</h4>
          <Link to="/register">New user?Create an Account?</Link>
          <br />
          <form className="mt-2" onSubmit={handleSubmit}>
       
            <div class="form-group">
              <input
                type="email"
                name="email"
                value={email}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Your Email"
                onChange={handleChange}
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                name="password"
                value={password}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" class="btn btn-primary" disabled={disabled}>
              Signup
            </button>
          </form>
        </div>
      </div>
      </Layout>
      </>
  );
};

export default About;
