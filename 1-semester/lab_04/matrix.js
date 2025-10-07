'use strict';

const get_max = (matrix) => {
    const arr_1d = [];
    for (const row of matrix) {
        for (const el of row) {
            arr_1d.push(el);
        }
    }

    const length = arr_1d.length;
    let i = 1;
    while (i < length) {
        let current = arr_1d[i];
        let j = i - 1;
        while ((j >= 0) && (arr_1d[j] > current)) {
            arr_1d[j + 1] = arr_1d[j];
            j--;
        }
        arr_1d[j + 1] = current;
        i++;
    }
    return arr_1d.pop();
};

const matrix = [[58, -7, 3], [1, 9, -1], [12, 24, 13]];
console.log(get_max(matrix));