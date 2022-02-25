import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import Home from './components/Home/Home'
import Logout from './components/Logout/Logout'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Dashbord from './components/User/Dashbord'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import AdminRoute from "./components/PrivateRoute/AdminRouter"
import AdminDashbord from './components/Admin/AdminDashbord'
import CreateCatagory from './components/Admin/CreateCatagory'
import ProductDetails from './components/ProductDetails/ProductDetails'



const App = () => {
  
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/logout">
          <Logout></Logout>
        </Route>
        <PrivateRoute path="/user/dashbord">
          <Dashbord></Dashbord>
        </PrivateRoute>
        <AdminRoute path="/admin/dashbord">
          <AdminDashbord></AdminDashbord>
        </AdminRoute>

        <AdminRoute path="/catagory">
          <CreateCatagory></CreateCatagory>
        </AdminRoute>

        <AdminRoute path="/product/:id">
          <ProductDetails></ProductDetails>
        </AdminRoute>
        <Redirect to="/"></Redirect>
      </Switch>
    </>
  );
}

export default App
