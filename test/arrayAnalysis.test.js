const arrayAnalysis = require('../arrayAnalysis');

it('Array 1', () =>{
    expect(arrayAnalysis([1,8,16,24,56,3])).toMatchObject({
            average:18,
            min:1,
            max:56,
            length:6
        })});

it('Array 2', () =>{
    expect(arrayAnalysis([11,38,146,-24,6,-3,28,22])).toMatchObject({
            average:28,
            min:-24,
            max:146,
            length:8
        })});