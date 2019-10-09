// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderJewelry from '../Products/render-jewelry.js';
import renderTableRow from '../Shopping Cart/render-table-row.js';
import { findItemById } from '../Common/Utils.js';

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
    const expected = '<li><h3 id="black-turquoise-ring">Black Turquoise Ring</h3><img src="../assets/blackturquoisering.jpg"><p id="price">Price: $50.00<button value="black-turquoise-ring">Add</button></p></li>';
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
    const expected = '<tr><td>Black Turquoise Ring</td><td>2</td><td>$50.00</td><td>$100.00</td></tr>';
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
    const expected = '<tr><td>Black Turquoise Ring</td><td>2</td><td>$50.00</td><td>$100.00</td></tr>';
    //Act 
    // Call the function you're testing and set the result to a const
    const jewelryElementTr = renderTableRow(blackTurquoiseRing, blackTurquoiseRingOrder);
    const stringHtmlOfJewelryElement = jewelryElementTr.outerHTML;
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(stringHtmlOfJewelryElement, expected);
});