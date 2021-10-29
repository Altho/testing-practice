const cipher = require('../cipher');

it('Cipher 1', () =>
    expect(cipher('Lets encrypt', 2))
        .toBe('NGVU GPETARV'))

it('Cipher 2', () =>
    expect(cipher('PUNCTUATION AND NUMB3RS WILL BE LEFT UNTOUCHED!', 8))
        .toBe('XCVKBCIBQWV IVL VCUJ3ZA EQTT JM TMNB CVBWCKPML!'))

it('Cipher 3', () =>
    expect(cipher('&(§GSDMlKqSdf^^`SDMDfsdFLM?SDF', 18))
        .toBe('&(§YKVEDCIKVX^^`KVEVXKVXDE?KVX'))


