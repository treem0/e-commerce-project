import renderTableRow from './render-table-row.js';
import jewelries from '../jewelry.js';
import { makePrettyCurrency, findItemById } from '../Common/Utils.js';

const tableElement = document.querySelector('tbody');

const getLineTotal = (order, item) => item.price * order.quantity;

const getCartTotal = (jewelries, cart) => {
    let cartTotal = 0;
    cart.forEach(order => {
        const orderJewelry = findItemById(order.id, jewelries);
        const lineTotal = getLineTotal(order, orderJewelry);
        cartTotal = cartTotal + lineTotal;
    });
    return cartTotal;
};

const addRow = (jewelryOrder, jewelries) => {
    const orderJewelry = findItemById(jewelryOrder.id, jewelries);
    const row = renderTableRow(orderJewelry, jewelryOrder);

    tableElement.appendChild(row);
};

const addRows = (cart, jewelries) => {
    cart.forEach(jewelryOrder => {
        addRow(jewelryOrder, jewelries);
    });
};

const buildTotalCell = (cart, jewelries) => {
    const totalCell = document.getElementById('order-total-cell');
    const cartTotal = getCartTotal(cart, jewelries);

    totalCell.textContent = makePrettyCurrency(cartTotal);
};

const buildTable = (cart, jewelries) => {
    buildTotalCell(cart, jewelries);
    addRows(cart, jewelries);
};


const localStorageCart = localStorage.getItem('cart');
const parsedCartActualData = JSON.parse(localStorageCart);

buildTable(parsedCartActualData, jewelries);

// for (let i = 0; i < jewelries.length; i++) {
//     if (jewelries[i].id === jewelryOrder.id) {
//         const row = renderTableRow(jewelries[i], jewelryOrder);

//         tableElement.appendChild(row);
//     }
// }