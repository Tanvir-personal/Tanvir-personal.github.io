/* eslint-disable spaced-comment */
/* eslint-disable space-before-blocks */
/* eslint-disable operator-linebreak */
const numbers = [];

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const recSum = (arr) => {
    if (arr.length === 0) {
        return 0;
    }
    return arr.shift() + recSum(arr);
};

const getNumber = () => {
    readline.question('Enter number: ', (number) => {
        console.log(number);
        //readline.close();
        if (number.toLowerCase() !== 'stop') {
            numbers.push(+number);
            getNumber();
        } else {
            readline.close();
            console.log(`sum: ${recSum(numbers)}`);
        }
    });
};

readline.question('What is your name? ', (name) => {
    console.log(`Welcome ${name}`);
    readline.question('What is your age? ', (age) => {
        const output =
            age < 16
                ? "You're not allowed to drive in Iowa"
                : "You're allowed to get a drivers license in Iowa";
        console.log(output);
        getNumber();
    });
});
