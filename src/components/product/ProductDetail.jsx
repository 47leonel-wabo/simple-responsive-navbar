import React, { useEffect, useState } from "react";
import * as ProductService from "./product-service";
import { useNavigate, useParams } from "react-router-dom";
import { css } from "@emotion/css";

const productDetailStyle = css`
    width: 80%;
    height: auto;
    flex-direction: column;
    margin: 0 auto;

    .product {
        &-img {
            width: 100%;
            margin-bottom: 16px;
        }
        &-item {
            display: flex;
            justify-content: space-between;
            color: #6f6f6f;

            &-name {
                font-size: 20px;
            }

            &-price {
                font-weight: bold;
            }
        }
    }
`;

function ProductDetail(props) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        (() => {
            try {
                const product = ProductService.getBookById(parseInt(id));
                setProduct(product);
            } catch (e) {
                console.warn(e);
                // programmatically navigate when an error occurred, and pass a state
                navigate("/", { replace: true, state: { id } });
            }
        })();
    }, [id]);

    if (product === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={productDetailStyle}>
            <img src={product.img} alt={product.name} className="product-img" />
            <div className="product-item">
                <span className="product-item-name">{product.name}</span>
                <span className="product-item-price">
                    {`$${product.price / 100}`}
                </span>
            </div>
        </div>
    );
}

export default ProductDetail;
