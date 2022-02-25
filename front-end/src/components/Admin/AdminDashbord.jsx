import React from "react";
import Layout from "../Layout";
import Manu from "../Manu";
import { userInfo } from "../../utils/auth";
import CreateCatagory from "./CreateCatagory"
import CreateProduct from "./CreateProduct";


const AdminDashbord = () => {
  const { name, email, role } = userInfo();
  return (
    <>
      <Manu></Manu>
      <Layout className="container-fluid" title="user dashbord">
        <div className="row mt-3">
          <div className="col-md-3">
            <ul class="list-group">
              <li class="list-group-item active">User Link</li>
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Create Catagory
                </button>
                <CreateCatagory></CreateCatagory>
              </li>
              <li class="list-group-item">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#ProductCreate"
                >
                  Create Product
                </button>
                <CreateProduct></CreateProduct>
              </li>
            </ul>
          </div>
          <div className="col-md-6 offset-md-1">
            <ul class="list-group">
              <li class="list-group-item active">User Information</li>
              <li class="list-group-item">Name : {name} </li>
              <li class="list-group-item">Email : {email}</li>
              <li class="list-group-item">Role : {role} </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashbord;
