import renderTableRow from './render-table-row.js';
import jewelries from '../jewelry.js';
import { makePrettyCurrency, findItemById } from '../Common/Utils.js';
import { getCart, setCart, initializeEmtpyCart } from '../Products/app.js';

const currentCartInLocalStorage = getCart();
const tableElement = document.querySelector('tbody');
//Need to write a loop that forEach(currentCartInLocalStorage) assigns thisOrder to a const and jewelry.id to a const, and renderTableRow with those two conts as the arguments

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



buildTable(parsedCartActualData, jewelries);

//Should be renderTableRow(thisJewelry, thisCartItem)
renderTableRow(jewelries, getCart());

