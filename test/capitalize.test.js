const capitalize = require('../capitalize')

it('Capitalize sentence', () =>
    expect(capitalize('This sentence needs to be properly capitalised.'))
        .toBe('THIS SENTENCE NEEDS TO BE PROPERLY CAPITALISED.'));

it('Capitalize sentence', () =>
    expect(capitalize('thiS senTence ALSO needS to be capitalized.'))
        .toBe('THIS SENTENCE ALSO NEEDS TO BE CAPITALIZED.'));






