import React from 'react'
import Layout from '../Layout'
import Manu from '../Manu'
import {userInfo} from "../../utils/auth"

const Dashbord = () => {
    const {name,email,role} = userInfo()
    return (
      <>
        <Manu></Manu>
        <Layout className="container-fluid" title="user dashbord">
          <div className="row mt-3">
            <div className="col-md-3">
              <ul class="list-group">
                <li class="list-group-item active">User Link</li>
                <li class="list-group-item">
                  <a href="#">My Cart</a>
                </li>
                <li class="list-group-item">
                  <a href="#">Update Profile</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 offset-md-1">
              <ul class="list-group">
                <li class="list-group-item active">User Information</li>
                <li class="list-group-item">Name : {name} </li>
                            <li class="list-group-item">Email : { email}</li>
                <li class="list-group-item">Role : {role} </li>
              </ul>
            </div>
            <div className="col-md-8 offset-md-2 mt-3">
              <ul class="list-group">
                <li class="list-group-item active">Purchase History</li>
                <li class="list-group-item">History </li>
                
              </ul>
            </div>
          </div>
        </Layout>
      </>
    );
}

export default Dashbord
