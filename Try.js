const prompt = require('prompt-sync')({sigint: true});

let a = 0;
let b = 1;

function AddTwoNumbers(a, b)
{
    return a + b;
}

console.log(AddTwoNumbers(a, b));

let love = 'i love you JS';

function ShoutItOut(love)
{
    return love.toUpperCase();
}

console.log(ShoutItOut(love));

let x = 5;
let y = 10;
function getAverage(x, y)
{
    return (x + y) / 2;
}
console.log(getAverage(x, y));


const names = ["Alrae","rick","Rigs","Jep","Kean","Sen","Kel","Mel","ron"];

function getArrayList(names)
{
    return names;
}
console.log(getArrayList(names));
