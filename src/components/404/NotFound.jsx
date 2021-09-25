import { css } from "@emotion/css";
import React from "react";

const notFoundStyle = css`
    text-align: center;
    padding: 64px;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 120px;
        color: #6f6f6f50;
    }

    .msg {
        color: #6f6f6f60;
        font-size: 32px;
        text-transform: none;
    }
`;

function NotFound(props) {
    return (
        <div className={notFoundStyle}>
            <span className="title">404</span>
            <span className="msg">Oups! element not found</span>
        </div>
    );
}

export default NotFound;
