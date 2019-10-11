import { makePrettyCurrency } from '../Common/Utils.js';

const makeTd = (content) => {
    const tdElement = document.createElement('td');
    tdElement.textContent = content;

    return tdElement;
};

export default (jewelry, thisOrder) => {
    const tableRow = document.createElement('tr');

    const totalPrice = thisOrder.quantity * jewelry.price;
    const prettyPrice = makePrettyCurrency(jewelry.price);
    const prettyTotal = makePrettyCurrency(totalPrice);

    const columnOne = makeTd(jewelry.name);
    const columnTwo = makeTd(thisOrder.quantity);
    const columnThree = makeTd(prettyPrice);
    const columnFour = makeTd(prettyTotal);


    tableRow.appendChild(columnOne);
    tableRow.appendChild(columnTwo);
    tableRow.appendChild(columnThree);
    tableRow.appendChild(columnFour);

    return tableRow;
};
