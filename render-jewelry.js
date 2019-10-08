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

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = jewelry.id;
    p.appendChild(button);

    li.appendChild(p);
    
    return li;
}


export default renderJewelry;