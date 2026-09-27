// 1. Convert Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

let celsius = 25;

console.log("1. Celsius to Fahrenheit");
console.log("Celsius:", celsius);
console.log("Fahrenheit:", celsiusToFahrenheit(celsius));


// 2. Find the Factorial of a Number

function factorial(n) {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result = result * i;
    }

    return result;
}

let number = 5;

console.log("\n2. Factorial");
console.log("Number:", number);
console.log("Factorial:", factorial(number));


// 3. Check for Palindrome

function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");

    return word === reversed;
}

let word = "racecar";

console.log("\n3. Palindrome");
console.log("Word:", word);
console.log("Is Palindrome:", isPalindrome(word));


// 4. Sum of Array Elements

function sumArray(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

let numbers = [10, 20, 30, 40, 50];

console.log("\n4. Sum of Array");
console.log("Array:", numbers);
console.log("Sum:", sumArray(numbers));


// 5. FizzBuzz

console.log("\n5. FizzBuzz");

for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
