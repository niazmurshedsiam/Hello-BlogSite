import React from 'react';
import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    return (

        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email === "test@test.com" && loggedInUser.password === "#2021dev" ? (
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