// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderJewelry from '../Products/render-jewelry.js';
import renderTableRow from '../Shopping Cart/render-table-row.js';
import { findItemById, calcLineItem, calcOrderItem } from '../Common/Utils.js';
import jewelries from '../jewelry.js';
import cart from '../Data/cart.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const blackTurquoiseRing = {
        id: 'black-turquoise-ring',
        name: 'Black Turquoise Ring',
        image: 'blackturquoisering.jpg',
        description: 'Handmade Black Turquoise Ring',
        category: 'ring',
        price: 50.00
    };
    const expected = '<li><h3 id="black-turquoise-ring">Black Turquoise Ring</h3><img src="../assets/blackturquoisering.jpg"><p id="price">Price: $50.00<button value="black-turquoise-ring">Add</button><p></p></p></li>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderJewelry(blackTurquoiseRing);
    const html = dom.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, expected);
});

test('renders a table row', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const blackTurquoiseRing = {
        id: 'black-turquoise-ring',
        name: 'Black Turquoise Ring',
        image: 'blackturquoisering.jpg',
        description: 'Handmade Black Turquoise Ring',
        category: 'ring',
        price: 50.00
    };
    const blackTurquoiseRingOrder = {
        id: 'black-turquoise-ring',
        quantity: 2
    };
    const expected = '<tr><td class="align-left"></td><td></td><td>$undefined</td><td class="line-item-total">$NaN</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const jewelryElementTr = renderTableRow(blackTurquoiseRing, blackTurquoiseRingOrder);
    const stringHtmlOfJewelryElement = jewelryElementTr.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(stringHtmlOfJewelryElement, expected);
});
test('take an array and returns first item with ID', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'black-turquoise-ring';
    const expected = 'Black Turquoise Ring';
    //Act 
    // Call the function you're testing and set the result to a const
    const foundJewelry = findItemById(jewelries, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.ok(foundJewelry);
    assert.deepEqual(foundJewelry.name, expected);
});
test('find product by id returns null if not found', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const id = 'not found';
    const expected = null;
    //Act 
    // Call the function you're testing and set the result to a const
    const foundJewelry = findItemById(jewelries, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(foundJewelry, expected);
});
test('calculates line total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 2.02;
    const expected = 6.06;
    //Act 
    // Call the function you're testing and set the result to a const
    const total = calcLineItem(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(total, expected);
});
test('calculates order total', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = 845;
    //Act 
    // Call the function you're testing and set the result to a const
    const orderTotal = calcOrderItem(cart, jewelries);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(orderTotal, expected);
});