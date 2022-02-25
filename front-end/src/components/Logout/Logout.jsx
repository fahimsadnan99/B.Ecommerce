import React, { useEffect } from "react";
import Layout from "../Layout";
import Manu from "../Manu";
import {signout} from "../../utils/auth"
import { useHistory } from "react-router";

const Logout = () => {
      const history = useHistory();
  useEffect(() => {
    signout(() => {
      history.push("/");
    });
  }, []);
  return (
    <>
      <Manu></Manu>
      <Layout className="container" title="logout"></Layout>
    </>
  );
};

export default Logout;
