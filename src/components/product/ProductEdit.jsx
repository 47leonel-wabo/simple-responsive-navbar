import { css } from "@emotion/css";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    addPlat,
    deletePlat,
    getBookById,
    updatePlat,
} from "./product-service";

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
                resize: none;
            }
        }

        &-buttons {
            display: flex;
            justify-content: space-around;
        }

        &-save-button {
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

        &-update-button {
            border: 1px solid blue;
            font-size: 16px;
            padding: 4px 8px;
            border-radius: 10px;
            background: none;
            color: blue;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: blue;
                color: white;
                outline: 0;
            }
        }

        &-delete-button {
            border: 1px solid red;
            font-size: 16px;
            padding: 4px 8px;
            border-radius: 10px;
            background: none;
            color: red;
            cursor: pointer;
            transition: all 0.3s ease;

            &:hover {
                background: red;
                color: white;
                outline: 0;
            }
        }
    }
`;

function ProductEdit({ isEdit }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        if (!isEdit) {
            setFormData({
                name: "",
                price: 0,
                img: "",
            });
            return;
        }

        (async () => {
            try {
                const product = await getBookById(parseInt(id));
                setFormData(product);
            } catch (e) {
                console.warn(e);
                navigate(`/admin`, { replace: true });
            }
        })();
    }, []);

    const handleValueChange = ({ name, value }) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        try {
            const id = addPlat(formData);
            navigate(`/admin`, { replace: true });
        } catch (e) {
            console.warn(e);
        }
    };

    const handleUpdate = () => {
        try {
            updatePlat(formData);
            navigate(`/admin`, { replace: true });
        } catch (e) {
            console.warn(e);
        }
    };

    const handleDelete = () => {
        if (
            !window.confirm(`Would you really want to delete ${formData.name}`)
        ) {
            return;
        }
        try {
            deletePlat(formData.id);
            navigate(`/admin`, { replace: true });
        } catch (e) {
            console.warn(e);
        }
    };

    if (formData === null) {
        return <div>Loading...</div>;
    }

    return (
        <div className={productEditStyle}>
            <span className="edit-title">Creation form</span>
            <form className="edit-form">
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
                <div className="edit-form-buttons">
                    {!isEdit && (
                        <button
                            type="button"
                            className="edit-form-save-button"
                            onClick={handleSave}
                        >
                            Create
                        </button>
                    )}
                    {isEdit && (
                        <button
                            type="button"
                            className="edit-form-update-button"
                            onClick={handleUpdate}
                        >
                            Update
                        </button>
                    )}
                    {isEdit && (
                        <button
                            type="button"
                            className="edit-form-delete-button"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default ProductEdit;
