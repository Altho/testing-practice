const calculator = require('../calculator');

it('add 5+5', () =>
    expect(calculator.add(5, 5))
        .toBe(10)
)
it('add 67+16', () =>
    expect(calculator.add(67, 16))
        .toBe(83)
)

it('substract 15-10', () =>
    expect(calculator.substract(15, 10))
        .toBe(5)
)

it('multiply 5*5', () =>
    expect(calculator.multiply(5, 5))
        .toBe(25)
)

it('divide 5/2', () =>
    expect(calculator.divide(5, 2))
        .toBe(2.5)
)