import * as data from "../../dummy-data";

export const fetchData = () => {
    return data.fakeProducts;
};

export function getBookById(id) {
    return data.fakeProducts.books.find((p) => p.id === id);
}
