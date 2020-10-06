import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  // User Context Hook
  const {state1,state2} = useContext(UserContext);
  const [loggedInUser,setLoggedInUser] = state1;

    return (
        <Route
        {...rest}
        render={({ location }) =>
        loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;