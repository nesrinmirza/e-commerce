import { commerce } from "./comerce"

export async function getProducts(id) {
    try {
        const products = await commerce.products.retrieve(id);
        return products
    } catch (error) {
        console.log("error.message");
    }
}

export async function searchInput(input) {
    try {
        const products = await commerce.products.list({
            query: input,
        });
       return products 
    } catch (error) {
        console.log("error.message");
    }
}

export async function searchproducts() {
    try {
        const products = await commerce.products.list();
       return products 
    } catch (error) {
        console.log("error.message");
    }
}


export async function categoryName() {
    try {
        const products = await commerce.categories.list();
       return products 
    } catch (error) {
        console.log("error.message");
    }
}

export async function getCategories(category) {
    try {
        const products = await commerce.products.list({
            category_slug: [`${category}`],
        });
        return products
    } catch (error) {
        console.log("error.message");
    }
}

export async function getPagesCategory(id, page, sort) {
    try {
        const categories = await commerce.products.list({
            category_slug: [`${id}`],
            limit: 6,
            page: `${page}`,
            sortBy: `${sort}`
        });
        return categories
    } catch (error) {
        console.log("error.message");
    }
}

export async function getFiltered( filter, page, sort , id) {
    try {
        const categories = await commerce.products.list({
            category_slug: [`${id}`],
            query: filter,
            limit: 6,
            page: `${page}`,
            sortBy: `${sort}`
        });
        return categories
    } catch (error) {
        console.log("error.message");
    }
}