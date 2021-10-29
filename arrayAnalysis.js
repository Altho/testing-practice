function arrayAnalysis([...arr]) {
    const array = arr;
    const object = {};
    object.average =array.reduce((a, b) => a + b) / array.length;
    object.length = array.length;
    object.max = Math.max(...array);
    object.min = Math.min(...array);
    ;
    // for (let e of arr) {
    //
    // }
    console.log(object)
    return object;
}

module.exports = arrayAnalysis;