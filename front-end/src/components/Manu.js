import React, { useContext } from 'react'
import { Link,NavLink } from "react-router-dom"
import "./Manu.css"
import { signout, isAuthenticate,userInfo } from "../utils/auth"






const Manu = () => {
 

 

    return (
      <div className="bg-dark">
        <nav className="navbar navbar-expand-md navbar-light  bg-dark">
          <Link className="navbar-brand" exact to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active_css"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              {!isAuthenticate() && (
                <>
                
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active_css"
                      exact
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeClassName="active_css"
                      exact
                      to="/register"
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}

              {isAuthenticate() && (
                <>
                  
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active_css"
                        exact
                        to={`/${userInfo().role}/dashbord`}
                      >
                        Dashbord
                      </NavLink>
                    </li>
               

                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      style={{ cursor: "pointer" }}
                      to="/logout"
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Manu
