// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderJewelry from '../render-jewelry.js';

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
