import { css } from "@emotion/css";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../404/NotFound";
import Admin from "../admin/Admin";
import MyProtectedRoute from "../common/ProtectedRoute";
import ScrollToTop from "../common/ScrollToTop";
import CustomNavBar from "../navbar/CustomNavBar";
import Products from "../product/Products";
import "./App.css";

const appStyle = css`
    padding: 32px;
    border: 1px solid #6f6f6f40;
    width: 826px;
    margin: 10px auto;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.3);
`;

const App = () => {
    const [authenticated] = useState(true);
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <CustomNavBar />
                <div className={appStyle}>
                    <Routes>
                        <Route path="/products*" element={<Products />} />
                        <Route
                            path="/admin*"
                            element={
                                authenticated ? (
                                    <Admin />
                                ) : (
                                    <Navigate to="/products" />
                                )
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
