'use strict';

const inc = (obj) => {
    obj.n += 1;
};

const object = {n: 3};
inc(object);
console.log(object);