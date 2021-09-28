import { css } from "@emotion/css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProductDetail from "./ProductDetail";
// import ProductsIndex from "./ProductsOverview";

// Code splitting
const ProductDetail = React.lazy(() => import("./ProductDetail"));
const ProductsIndex = React.lazy(() => import("./ProductsOverview"));

const productsStyle = css`
    display: flex;
    flex-direction: column;

    .logo {
        width: 100px;
        height: 100px;
        margin: 0 auto 16px;
    }
`;

function Products(props) {
    return (
        <div className={productsStyle}>
            <img
                className="logo"
                src="/assets/images/atlight.png"
                alt="Green"
            />
            <Routes>
                <Route
                    path="/"
                    element={<ProductsIndex title="Available products" />}
                />
                <Route path=":id" element={<ProductDetail />} />
            </Routes>
        </div>
    );
}

export default Products;
