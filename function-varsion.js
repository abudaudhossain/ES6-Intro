// function declare 
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}

// function exprension 
const add2 = function add(num1, num2) {
    return num1 + num2;
}
// function exprension (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

// arrow function 
const add4 = (num1, num2) => num1 + num2;

const sum1 = add(12, 13);
const sum2 = add2(12, 13);
const sum3 = add3(12, 13);
const sum4 = add4(12, 13);

console.log(sum1, sum2, sum3, sum4);