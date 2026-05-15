const sumAll = function (x, y) {

    if (x < 0 || y < 0) return "ERROR";
    if (Number.isInteger(x) !== true || Number.isInteger(y) !== true) return "ERROR";

    if (x > y) {
        const temp = x;
        x = y;
        y = temp;
    }

    let sum = (y + x) * (y - x + 1) / 2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;