'use_strict';

const seq = (a) => {
   return (b) => {
    if (typeof b === "number") {
        return a(b);
    }
    else {
        return seq((x) => a(b(x)));
    }
   }
}

console.log(seq(x => x * 3)(x => x + 10)(23));