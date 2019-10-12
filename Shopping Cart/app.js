import renderTableRow from './render-table-row.js';
import jewelries from '../jewelry.js';
import { makePrettyCurrency, findItemById, calcOrderItem } from '../Common/Utils.js';

const tableElement = document.querySelector('tbody');
const placeOrderButton = document.getElementById('place-order-button');
const orderTotalCell = document.getElementById('order-total-cell');

// const json = localStorage.getItem('CART');
// let cart;
// if (json) {
//     cart = JSON.parse(json);
// } else {
//     cart = [];
// }

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const jewelry = findItemById(jewelries, lineItem.id);
    const dom = renderTableRow(lineItem, jewelry);

    tableElement.appendChild(dom);
}

const orderTotal = calcOrderItem(cart, jewelries);
orderTotalCell.textContent = makePrettyCurrency(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
} else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');
        alert('Your order has been placed!' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}
