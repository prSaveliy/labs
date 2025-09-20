'use strict';

const count_types = (arr) => {
    const dict = {};
    for (const el of arr) {
        const type = typeof el;
        dict[type] = dict[type] + 1 || 1;
    }
    return dict;
};

const array = ['hello', 3, false, '', {}, true, -10, null, x];
console.log(count_types(array));
var x = 10;