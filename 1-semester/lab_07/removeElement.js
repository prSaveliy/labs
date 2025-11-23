'use strict';

const removeElement = (array, item) => {
    const indx = array.indexOf(item);
	if (indx !== -1) array.splice(indx, 1);
    return array;
};

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const array1 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array1, 'Lima');
removeElement(array1, 'Berlin');
console.log(array1);
