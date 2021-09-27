import React from "react";
import { Navigate, Route } from "react-router-dom";

const MyProtectedRoute = ({
    Component,
    isAuth,
    redirectTo,
    ...restOfProperties
}) => {
    return isAuth ? (
        <Route {...restOfProperties} element={<Component />} />
    ) : (
        <Navigate to={redirectTo} />
    );
};

export default MyProtectedRoute;
