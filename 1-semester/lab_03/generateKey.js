'use strict';

const generateKey = (length, characters) => {
    let res = '';
    for (let i = 0; i < length; i++) {
        let indx = Math.floor(Math.random() * characters.length);
        res += characters[indx];
    }
    return res;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters));