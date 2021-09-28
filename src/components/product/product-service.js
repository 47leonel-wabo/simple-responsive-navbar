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

export const addPlat = (payload) => {
    payload.id = data.fakeProducts.books.length + 1;
    // alert(JSON.stringify(payload, null, 2));
    return data.fakeProducts.books.push(payload);
};

export const updatePlat = (payload) => {
    // alert(JSON.stringify(getBookById(payload.id)));
    const i = data.fakeProducts.books.findIndex((p) => p.id === payload.id);
    data.fakeProducts.books[i] = payload;
};

export const deletePlat = (platID) => {
    data.fakeProducts.books = data.fakeProducts.books.filter(
        (p) => p.id !== platID
    );
};
