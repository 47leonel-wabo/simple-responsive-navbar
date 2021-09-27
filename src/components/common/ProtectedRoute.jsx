import React from "react";
import { Navigate, Route } from "react-router-dom";

const MyProtectedRoute = ({
    element,
    isAuthenticated,
    ...restOfProperties
}) => {
    return isAuthenticated ? (
        <Route {...restOfProperties} element={element} />
    ) : (
        <Navigate to="/" />
    );
};

export default MyProtectedRoute;
