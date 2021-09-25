import { css } from "@emotion/css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Admin from "../admin/Admin";
import CustomNavBar from "../navbar/CustomNavBar";
import Products from "../product/Products";
import "./App.css";

const appStyle = css`
    padding: 32px;
    border: 1px solid #6f6f6f40;
    width: 800px;
    margin: 10px auto;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);
`;

const App = () => {
    return (
        <>
            <BrowserRouter>
                <CustomNavBar />
                <div className={appStyle}>
                    <Routes>
                        <Route path="/" element={<Products />} />
                        <Route path="/admin" element={<Admin />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
