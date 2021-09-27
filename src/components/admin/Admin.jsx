import { css } from "@emotion/css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductEdit from "../product/ProductEdit";
import ProductsIndex from "../product/ProductsOverview";

const adminStyle = css`

    .adminStyle{
        &-header{
            display; flex;
        }

        &-title{
            font-size: 22px;
            color: #6f6f6f;
            display: none;
        }

        &-new{
            border: none;
            color: white;
            background: #6f6f6f75;
            padding: 4px 8px;
            border-radius: 5px;
            margin-left: auto;
            transition: all .3s ease;

            &:hover{
                background: #6f6f6f;
            }
        }
    }
`;

function Admin(props) {
    return (
        <div className={adminStyle}>
            <div className="adminStyle-header">
                <span className="adminStyle-title">Admin panel</span>
                <Link to="new" className="adminStyle-new">
                    + New
                </Link>
            </div>
            <Routes>
                <Route path="/" element={<ProductsIndex title="" />} />
                <Route path="/new" element={<ProductEdit />} />
            </Routes>
        </div>
    );
}

export default Admin;
