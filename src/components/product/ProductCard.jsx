import { css } from "@emotion/css";
import React from "react";
import { Link } from "react-router-dom";

const CardStyle = css`
    width: 180px;
    height: 170px;
    text-align: center;
    cursor: pointer;
    margin: 16px 4px;
    // border: 1px solid #6f6f6f;
    transition: transform .3s ease-in-out, background: .1s ease-in-out, box-shadow: .3s ease-in-out;

    &:hover{
        box-shadow: 0 6px 12px rgba(0, 222, 0, .2);
        transform: translate(0, -3px);
    }

    .card {
        &-img {
            width: 95%;
            height: 80%;
        }
        &-content {
            display: flex;
            justify-content: space-between;
            padding: 0 4px;

            .item {
                &-name {
                    font-size: 14px;
                    font-weight: bold;
                    color: #6f6f6f;
                }
                &-price {
                    font-size: 12px;
                    font-weight: bold;
                    color: tomato;
                }
            }
        }
    }
`;

function ProductCard({ product }) {
    return (
        <Link to={`${product.id}`} className={CardStyle}>
            <img src={product.img} alt={product.name} className="card-img" />
            <div className="card-content">
                <span className="item-name">{product.name}</span>
                <span className="item-price">{`$${product.price / 100}`}</span>
            </div>
        </Link>
    );
}

export default ProductCard;
