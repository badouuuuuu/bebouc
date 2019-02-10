import React from "react";
import Routes from "../routes.js";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            // const path = props.location.pathname;

            if (Routes.isAuth() === false) {
                return <Redirect to="/" />;
            }
            return <Component {...props} />;
        }}
    />
);
