import jewelries from '../jewelry.js';
import cart from '../Data/cart.js';
import renderTableRow from '../Products/render-jewelry.js';

const tableElement = document.querySelector('tbody');

export const makePrettyCurrency = (number) => number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

//const totalJewelryPrice = (jewelries, quantity) => jewelries.price * quantity;


//export const totalCartTotal = (jewelries, cart) => {
    
//};


export const findItemById = (jewelries, id) => {
    for (let i = 0; i < jewelries.length; i++) {
        const lineItem = jewelries[i];
        if (lineItem.id === id) {
            return lineItem;
        }
    }
    return null;
};

export const calcLineTotal = (quantity, price) => {
    const amount = quantity * price;
    return roundCurrency(amount);
};
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}