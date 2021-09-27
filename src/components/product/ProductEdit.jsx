import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";

const productEditStyle = css`
    width: 550px;
    margin: 0 auto;

    .edit-form {
        display: flex;
        flex-direction: column;
        margin: 16px 0;

        &-input {
            margin: 8px 0;
            padding: 0 4px;

            &.edit-textarea {
                height: 80px;
                padding: 8px;
            }
        }

        &-button {
            border: 1px solid green;
            font-size: 16px;
            padding: 4px 8px;
            border-radius: 10px;
            background: none;
            color: green;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: green;
                color: white;
                outline: 0;
            }
        }
    }
`;

function ProductEdit(props) {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        setFormData({
            name: "",
            price: 0,
            img: "",
        });
    }, []);

    const handleValueChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        alert(JSON.stringify(formData, null, 2));
    };

    if (formData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={productEditStyle}>
            <span className="edit-title">Creation form</span>
            <form className="edit-form">
                {/* <input
                    type="text"
                    className="edit-form-input"
                    name="id"
                    placeholder="ID"
                    value={formData.id}
                    onChange={handleValueChange}
                /> */}
                <input
                    type="text"
                    className="edit-form-input"
                    name="name"
                    value={formData.name}
                    placeholder="Product name"
                    onChange={({ target }) => handleValueChange(target)}
                />
                <input
                    type="number"
                    className="edit-form-input"
                    name="price"
                    value={formData.price}
                    placeholder="Product price"
                    onChange={({ target }) =>
                        handleValueChange({
                            name: target.name,
                            value: parseInt(target.value),
                        })
                    }
                />
                <textarea
                    className="edit-form-input edit-textarea"
                    name="img"
                    value={formData.img}
                    placeholder="Product image link"
                    onChange={({ target }) => handleValueChange(target)}
                />
                <button
                    type="button"
                    className="edit-form-button"
                    onClick={handleSave}
                >
                    Create
                </button>
            </form>
        </div>
    );
}

export default ProductEdit;
