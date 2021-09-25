import { css } from "@emotion/css";
import React from "react";

const productsStyle = css`
    display: flex;
    flex-direction: column;
    border: 1px solid red;

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
            <div>Products</div>
        </div>
    );
}

export default Products;
