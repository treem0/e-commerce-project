import renderJewelry from './render-jewelry.js';
import jewelries from './jewelry.js';

const list = document.getElementById('jewelries');

for (let i = 0; i < jewelries.length; i++) {
    const jewelry = jewelries[i];
    const dom = renderJewelry(jewelry);
    list.appendChild(dom);
}