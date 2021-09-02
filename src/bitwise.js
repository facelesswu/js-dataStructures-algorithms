console.log(5..toString(2)); // 101
console.log(3..toString(2)); // 011

let val1 = 5 & 3;
let val2 = 5 | 3;
let val3 = ~ 5;
let val4 = 5 << 3;
let val5 = 5 >> 1;

console.log(val1, val1.toString(2)); // 1 001
console.log(val2, val2.toString(2)); // 7 111
console.log(val3); // -6
console.log(val4, val4.toString(2)); // 40 101000
console.log(val5, val5.toString(2)); // 2 010
