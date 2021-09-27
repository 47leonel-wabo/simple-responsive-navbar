import * as data from "../../dummy-data";

export const fetchData = () => {
    return data.fakeProducts;
};

export function getBookById(id) {
    const value = data.fakeProducts.books.find((p) => p.id === id);
    if (value === undefined) {
        throw Error("Book not found");
    }
    return value;
}
