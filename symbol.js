"use strict";
console.log(Symbol('foo') === Symbol('foo')); // false
const sym = Symbol();
const obj = {
    sym: "value",
};
obj["sym"];
function returnVoid(message) {
    console.log(message);
}
const r = returnVoid('no return');
