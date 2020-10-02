
exports.min = function min (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let min = array[0];
    for (let i = 0; i < array.length; i+=1) {
        if (min > array[i]) {
            min = array[i];
        }
    }
    return min;
}

exports.max = function max (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let max = array[0];
    for (let i = 0; i < array.length; i+=1) {
        if (max < array[i]) {
            max = array[i];
        }
    }
    return max;
}

exports.avg = function avg (array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < array.length; i+=1) {
        total+=array[i];
    }
    let avg = total/array.length;
    return avg;
}
