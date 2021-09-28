import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import * as ProductService from "./product-service";
import ProductCard from "./ProductCard";

const productListStyle = css`
    width: 100%;
    display: flex;
    flex-direction: column;

    .page {
        &-title {
            font-size: 24px;
            color: #6f6f6f;
            margin: 8px 0;
            text-transform: none;
        }
        &-sort,
        &-order {
            display: flex;
            align-items: center;
            margin-top: 8px;

            span {
                margin-right: 32px;
                color: #6f6f6f;
                font-weight: bolder;
            }
            label {
                cursor: pointer;
                padding: 0 8px;
            }
        }
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

    // Access search parameters
    const [searchParams, setSearchParams] = useSearchParams();

    // get the state after navigation
    useEffect(() => {
        console.log(searchParams.entries());
        if (state) {
            console.log(
                `Redirection after an error, unable to find book ${state.id}`
            );
        }
    }, []);

    useEffect(() => {
        (() => {
            const data = ProductService.fetchData().books;
            const params = Object.fromEntries([...searchParams]);
            sortProductsFromParams(data, params);
        })();
    }, []);

    const sortProductsFromParams = (data, params) => {
        // if there is no param
        if (!Object.keys(params).length) {
            setProducts(data);
            return;
        }
        // otherwise
        const sortedData = [...data].sort((a, b) => {
            const { sort, order } = params;
            // console.log(sort, a[sort], b[sort]);
            switch (order) {
                case "asc": {
                    return a[sort] > b[sort] ? 1 : -1;
                }
                case "desc": {
                    return a[sort] < b[sort] ? 1 : -1;
                }
                default: {
                    return 0;
                }
            }
        });
        setProducts(sortedData);
    };

    const handleRadioChange = (e) => {
        const { value, name } = e.target;
        // get current url parameters
        const currentParams = Object.fromEntries([...searchParams]);
        const newParams = { ...currentParams, [name]: value };
        setSearchParams(newParams);
        sortProductsFromParams(products, newParams);
    };

    if (products === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={productListStyle}>
            <div className="page">
                <span className="page-title">{title}</span>
                <div className="page-sort">
                    <span>Sort</span>
                    <label>
                        Name
                        <input
                            type="radio"
                            name="sort"
                            value="name"
                            onChange={handleRadioChange}
                            defaultChecked={searchParams.get("sort") === "name"}
                        />
                    </label>
                    <label>
                        Price
                        <input
                            type="radio"
                            name="sort"
                            value="price"
                            onChange={handleRadioChange}
                            defaultChecked={
                                searchParams.get("sort") === "price"
                            }
                        />
                    </label>
                </div>
                <div className="page-order">
                    <span>Order</span>
                    <label>
                        Ascending
                        <input
                            type="radio"
                            name="order"
                            value="asc"
                            onChange={handleRadioChange}
                            defaultChecked={searchParams.get("order") === "asc"}
                        />
                    </label>
                    <label>
                        Descending
                        <input
                            type="radio"
                            name="order"
                            value="desc"
                            onChange={handleRadioChange}
                            defaultChecked={
                                searchParams.get("order") === "desc"
                            }
                        />
                    </label>
                </div>
            </div>
            <div className="items">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductsIndex;
