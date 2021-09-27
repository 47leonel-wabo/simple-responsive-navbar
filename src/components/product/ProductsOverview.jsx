import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as ProductService from "./product-service";
import ProductCard from "./ProductCard";

const productListStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;

    .page-title {
        font-size: 24px;
        color: #6f6f6f;
        margin: 8px 0;
        text-transform: none;
    }

    .items {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        padding: 4px;
    }
`;

function ProductsIndex({ title }) {
    const [products, setProducts] = useState(null);

    // Access navigation state property
    const { state } = useLocation();

    // get the state after navigation
    useEffect(() => {
        if (state) {
            console.log(
                `Redirection after an error, unable to find book ${state.id}`
            );
        }
    }, []);

    useEffect(() => {
        (() => {
            const data = ProductService.fetchData();
            setProducts(data);
        })();
    }, []);

    if (products === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={productListStyle}>
            <span className="page-title">{title}</span>
            <div className="items">
                {products.books.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsIndex;
