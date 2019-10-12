import { findItemById } from '../Common/Utils.js';
import jewelries from '../jewelry.js';

function renderJewelry(jewelry) {
    const li = document.createElement('li');
    li.name = jewelry.name;

    const h3 = document.createElement('h3');
    h3.id = jewelry.id;
    h3.textContent = jewelry.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + jewelry.image;
    li.appendChild(img);

    const p = document.createElement('p');
    p.id = 'price';

    const usd = 'Price: $' + jewelry.price.toFixed(2);
    p.textContent = usd;

    const itemQuantity = document.createElement('P');

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = jewelry.id;
    button.addEventListener('click', () => {
        
        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }

        let lineItem = findItemById(cart, jewelry.id)
        itemQuantity.textContent = 'Qty: ' + lineItem.quantity;
        
        
        if (!lineItem) {
            lineItem = {
                id: jewelry.id,
                quantity: 1
            }
            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }
        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

     });    
        p.appendChild(button);
        li.appendChild(p);
        p.appendChild(itemQuantity);
        return li;
    }
export default renderJewelry;