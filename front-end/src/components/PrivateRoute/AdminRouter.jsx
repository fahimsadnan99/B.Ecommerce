import { Route, Redirect } from "react-router-dom";
import { isAuthenticate,userInfo } from "../../utils/auth";

const PrivateRoute = ({ children, ...rest }) => {
    const {role} = userInfo()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticate() && role === 'admin' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
