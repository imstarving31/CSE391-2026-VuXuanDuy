console.log("Version 1 - Classic FizzBuzz:");
for (let number = 1; number <= 100; number++) {
    let output = "";

    if (number % 3 === 0) {
        output += "Fizz";
    }
    if (number % 5 === 0) {
        output += "Buzz";
    }

    console.log(output || number);
}

function customFizzBuzz(n, rules) {
    for (let number = 1; number <= n; number++) {
        let output = "";

        for (let i = 0; i < rules.length; i++) {
            if (number % rules[i].divisor === 0) {
                output += rules[i].word;
            }
        }

        console.log(output || number);
    }
}

console.log("\nVersion 2 - Custom FizzBuzz:");
customFizzBuzz(30, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" },
]);
