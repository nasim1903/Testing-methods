const {getLarge, getSmall} = require('../numbers')
const each = require("jest-each").default;

describe('number functions', () => {

    test("Largest value", () =>{
        const result = getLarge(1, 2, 3);
    
        expect(result).toBe(3);
    })

    test('getSmall', () => {
        const result = getSmall(1, 2, 3)

        expect(result).toBe(1)
    })

});


