import jewelries from "../jewelry";

export const makePrettyCurrency = (number) => number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

const totalJewelryPrice = (jewelries, quantity) => jewelries.price * quantity;

}
export const totalCartTotal = (jewelries, cart) => {
    

}