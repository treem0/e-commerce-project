import { makePrettyCurrency, calcLineItem } from '../Common/Utils.js';

function renderTableRow(lineItem, jewelries) {
    const tableRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = jewelries.name;
    tableRow.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tableRow.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = '$' + jewelries.price;
    tableRow.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = calcLineItem(lineItem.quantity, jewelries.price);
    totalCell.textContent = makePrettyCurrency(total);
    tableRow.appendChild(totalCell);

    return tableRow;
}
export default renderTableRow;







