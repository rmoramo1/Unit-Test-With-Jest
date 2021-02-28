// importar la función sum del archivo app.js
const { sum,fromDollarToYen,fromEuroToDollar,fromYenToPound } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    const total = sum(14, 9);
    const experamos =23;
    expect(total).toBe(experamos);
});

test("One euro should be 1.206 dollars", ()=>{
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})

test("One yen should be 1.206 dollars", ()=>{
    const { fromDollarToYen } = require('./app.js');
    const dollars = fromDollarToYen(1);
    const expected = (1 / 1.2)*127.9; 
    expect(expected).toBe(dollars);
});

test("One yen should be 1.206 dollars", ()=>{
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(1);
    const expected = (1 / 127.9)*0.8; 
    expect(expected).toBe(yen);
});