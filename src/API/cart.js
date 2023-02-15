import { commerce } from "./comerce";

export async function getCart() {
    try {
        const product = await commerce.cart.retrieve();
        return product
    } catch (error) {
        console.log("error.message");
    }
}

export async function updateCart(id, quantity) {
    try {
        const product = await commerce.cart.update(`${id}`,{
        quantity: `${quantity}`}
        );
        return product
    } catch (error) {
        console.log("error.message");
    }
}

export async function deleteCart(id) {
    try {
        const product = await commerce.cart.remove(`${id}`);
        return product
    } catch (error) {
        console.log("error.message");
    }
}