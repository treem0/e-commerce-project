import renderJewelry from '../Products/render-jewelry.js';
import jewelries from '../jewelry.js';
import renderTableRow from '../Shopping Cart/render-table-row.js';

const emptyCart = [];
const list = document.getElementById('jewelries');

for (let i = 0; i < jewelries.length; i++) {
    const jewelry = jewelries[i];
    const dom = renderJewelry(jewelry);
    list.appendChild(dom);
}
export const incrementById = (id, cart) => {
    let thereIsAMatch = false;

    cart.forEach(order => {
        if (order.id === id) {
            order.quantity ++;
            thereIsAMatch = true;
        }
    });

    if (thereIsAMatch) {
        return;
    } else {
        const lineItem = {
            id: id,
            quantity: 1,
        };
        cart.push(lineItem);
    }
};


export const initializeEmtpyCart = () => {
    const serializedCart = JSON.stringify(emptyCart);

    localStorage.setItem('cart', serializedCart);
};

export const getCart = () => JSON.parse(localStorage.getItem('cart'));

export const setCart = (currentCartInLocalStorage) => {
    const serializedNewCart = JSON.stringify(currentCartInLocalStorage);
    localStorage.setItem('cart', serializedNewCart);
};

