import renderTableRow from './render-table-row.js';
import jewelries from '../jewelry.js';
import { makePrettyCurrency } from '../Common/Utils.js';
import cart from '../Data/cart.js';

const tableElement = document.querySelector('tbody');

let cartTotal = 0;
cart.forEach(jewelryOrder => {
    jewelries.forEach(jewelries => {
        let jewelryTotal;
        
        if (jewelries.id === jewelryOrder.id) {
            const row = renderTableRow(jewelries, jewelryOrder)
            tableElement.appendChild(row);

            jewelryTotal = jewelries.price * jewelryOrder.quantity;

            cartTotal = cartTotal + jewelryTotal;
        }
    });

    const totalCell = document.getElementById('order-total-cell');
    totalCell.textContent = makePrettyCurrency(cartTotal);
});