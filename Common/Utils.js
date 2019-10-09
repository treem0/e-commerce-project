import jewelries from '../jewelry.js';
import cart from '../Data/cart.js';

const tableElement = document.querySelector('tbody');

export const makePrettyCurrency = (number) => number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

const totalJewelryPrice = (jewelries, quantity) => jewelries.price * quantity;


export const totalCartTotal = (jewelries, cart) => {
    
};


export const findItemById = (jewelries, id) => {
    for (let i = 0; i < jewelries.length; i++) {
        const lineItem = cart[i];
        const jewelry = findItemById(jewelries, lineItem.id);
        const dom = renderTableRow(lineItem, jewelry);

        tableElement.appendChild(dom);
    }
};