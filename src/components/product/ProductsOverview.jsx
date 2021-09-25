import React, { useEffect, useState } from "react";
import * as ProductService from "./product-service";

function ProductsIndex(props) {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await ProductService.fetchData();
            setProducts(data);
        })();
    }, []);

    if (products === null) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <span>All products available</span>
            {products.books.map((product) => (
                <div key={product.id}>{product.name}</div>
            ))}
        </div>
    );
}

export default ProductsIndex;
