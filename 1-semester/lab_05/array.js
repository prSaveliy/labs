'use strict';

const array = () => {
    let arr = [];

    const get = (indx) => arr[indx];
    get.push = (el) => arr.push(el);
    get.pop = () => arr.pop();

    return get;
}


const arr = array();

arr.push(1);
arr.push(2);
arr.push(3);
const x = arr.push(4);

for (let i = 0; i < x; i++) {
    console.log(arr(i));
}

for (let i = 0; i <= x; i++) {
    console.log(arr.pop());
}
