"use strict";
console.log(Symbol('foo') === Symbol('foo'));
function returnVoid(message) {
    console.log(message);
}
const r = returnVoid('no return');
