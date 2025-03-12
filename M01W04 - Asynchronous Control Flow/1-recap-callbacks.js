const doSomeMath = (num1, num2, callBackOperation) => {
    console.log(`Number 1: ${num1}`);
    console.log(`Number 2: ${num2}`);
    return callBackOperation(num1, num2);
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const add = (num1, num2) => {
    return num1 + num2;
}

const multiplyResult = doSomeMath(10, 20, multiply);
console.log(multiplyResult);
const sumResult = doSomeMath(10, 20, add);
console.log(sumResult);

const names = ['Alex Miller', 'Martha Smith', 'Roger Anderson'];

const printName = (name, index) => {
    console.log(index, name);
}

names.forEach(printName);
