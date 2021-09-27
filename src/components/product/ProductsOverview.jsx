import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
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

function ProductsIndex(props) {
    const [products, setProducts] = useState(null);

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
            <span className="page-title">All products available</span>
            <div className="items">
                {products.books.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsIndex;
