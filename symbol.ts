console.log(Symbol('foo') === Symbol('foo')); // false

const sym = Symbol();

const obj = {
    sym : "value",
};

obj["sym"]

function returnVoid(message: string) {

    console.log(message);
}

const r = returnVoid('no return');
