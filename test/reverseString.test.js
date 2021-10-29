const reverseString = require('../reverseString');
it('reverse a string', () =>
    expect(reverseString('This string needs to be reversed'))
        .toBe('desrever eb ot sdeen gnirts sihT')
)

it('reverse a string', () =>
    expect(reverseString('Shot sentence'))
        .toBe('ecnetnes tohS')
)
