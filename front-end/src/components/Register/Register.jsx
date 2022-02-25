import React, { useState } from "react";
import Layout from "../Layout";
import { useHistory, Link ,Redirect} from "react-router-dom";
import { errorStatus, loadingStatus } from "../../utils/Message";
import { Registration } from "../../API/authApi";
import Manu from "../Manu";
import { isAuthenticate } from "../../utils/auth";

const Register = () => {
  const history = useHistory();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: false,
    loading: false,
    disabled: false,
    success: false,
  });
  const { name, email, password, error, loading, disabled, success } = values;
  const handleChange = (e) => {
    setValues({
      ...values,
      error: false,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValues({ ...values, error: false, disabled: true, loading: true });
    Registration({ name, email, password })
      .then((response) => {
       
        setValues({
          name: "",
          email: "",
          password: "",
          loading: false,
          disabled: false,
          success: true,
        });
      })
      .catch((err) => {
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
          success : false
        });
      });
  };

  const successMsg = () => {
    if (success)
      return (
        <div className="alert alert-primary">
          New accaount Created <Link to="/login">Login Your Accaount</Link>
        </div>
      );
     if (isAuthenticate()) return <Redirect to="/"></Redirect>;
  };

  return (
    <>
      <Manu></Manu>
    <Layout className="container" title="Register">
      <div className="row mt-5">
        <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          {loadingStatus(loading)}
          {errorStatus(error, error)}
          {successMsg(success)}
          <h4>Register An Accaout</h4>
          
          <br />
          <form className="mt-2" onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="name"
                name="name"
                value={name}
                class="form-control"
                placeholder="Enter Your name"
                onChange={handleChange}
                required
              />
            </div>
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

export default Register;
