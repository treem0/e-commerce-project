export const makePrettyCurrency = (number) => number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
});

export const findItemById = (jewelries, id) => {
    for (let i = 0; i < jewelries.length; i++) {
        const lineItem = jewelries[i];
        if (lineItem.id === id) {
            return lineItem;
        }
    }
    return null;
};

export const calcLineItem = (quantity, price) => {
    const amount = quantity * price;
    return roundCurrency(amount);
};
function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export const calcOrderItem = (cart, jewelries) => {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const jewelry = findItemById(jewelries, lineItem.id);
        const lineTotal = calcLineItem(lineItem.quantity, jewelry.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
};