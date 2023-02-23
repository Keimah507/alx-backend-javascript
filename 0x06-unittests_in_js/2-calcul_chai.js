#!/usr/bin/node

calculateNumber = (type, a, b) => {
    if (type == 'SUM') {
        Math.round(a) + Math.round(b);
    }
    else if (type == 'SUBTRACT') {
        Math.round(a) - Math.round(b);
    }
    else if (type == 'DIVIDE') {
        if (Math.round(b) == 0) {
            return ('Error');
        }
        Math.round(a) / Math.round(b);
    }
}
module.exports = calculateNumber;