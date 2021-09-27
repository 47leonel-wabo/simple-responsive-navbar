import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsIndex from "../product/ProductsOverview";

function Admin(props) {
    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={<ProductsIndex title="Administration panel" />}
                />
            </Routes>
        </div>
    );
}

export default Admin;
