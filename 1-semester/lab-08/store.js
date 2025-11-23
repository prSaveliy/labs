'use strict';

const store = (value) => {
    let val = value;
    return () => val;
};

const read = store(5);
const value = read();
console.log(value);