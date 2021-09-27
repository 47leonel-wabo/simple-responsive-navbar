import { css } from "@emotion/css";
import React from "react";
import { Outlet } from "react-router-dom";

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
            <div>
                <Outlet />
            </div>
        </div>
    );
}

export default Products;
