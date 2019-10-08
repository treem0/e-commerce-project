import { renderTableRow } from './render-table-row.js';
import jewelries, { cart } from '../jewelry.js';
import { makePrettyCurrency } from '../Common/Utils.js';

const tableElement = document.querySelector('tbody');

cart.forEach(jewelryOrder => {
    const jewelryIdFromOrder = jewelryOrder.id;

    for (let i = 0; i < jewelries.length; i++) {
        if (jewelries[i].id === jewelryIdFromOrder) {
            const row = renderTableRow(jewelries[i], jewelryOrder);
            tableElement.appendChild(row);
        }
    }

});

