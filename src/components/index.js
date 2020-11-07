import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Signin from "./signin/index";
import SignUp from "./signup/index";

const authObj = {
    isAuthenticated: true
    //   isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
    //   authenticate(isLoggedBool) {
    //     localStorage.setItem("isAuthenticated", isLoggedBool);
    //     let token = localStorage.getItem("token");
    //     this.isAuthenticated =
    //       token && JSON.parse(localStorage.getItem("isAuthenticated"));
    //   },
};



const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            authObj.isAuthenticated === true ? (
                <Component {...props} authObj={authObj} />
            ) : (
                    <Redirect to="/" />
                )
        }
    />
);

export default function App(props) {

    return (
        <div style={{ backgroundColor: "#e8ebe9" }} >
            <Route
                exact
                path="/"
                component={Signin}
            />
            <Route
                exact
                path="/signup"
                component={SignUp}
            />

        </div>
    );
}
