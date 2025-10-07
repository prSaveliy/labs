'use strict';

const obj_iter = (obj) => {
    const new_obj = {};
    for (const key in obj) {
        const dates = obj[key];
        const lifetime = dates.died - dates.born;
        new_obj[key] = lifetime;
    }
    return new_obj;
};

const people = {
    newton: { born: 1643, died: 1727 },
    einstein: { born: 1879, died: 1955 },
    curie: { born: 1867, died: 1934 }
};

console.log(obj_iter(people));