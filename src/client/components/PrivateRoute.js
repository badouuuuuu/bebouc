import React from "react";
import API from "../API.js";
import {Route, Redirect} from "react-router-dom";

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props => {
            let path = props.location.pathname;

            console.log(path);

            if (API.isAuth() === false) {
                return <Redirect to="/" />;
            }
            return <Component {...props} />;
        }}
    />
);
