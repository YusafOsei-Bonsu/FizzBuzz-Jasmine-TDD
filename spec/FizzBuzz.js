module.exports = FizzBuzz = (value) => {
    // If the number is divisible by 3 and 5
    if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
    // If the number is divisible by 3, but not 5
    else if (value % 3 === 0) return "Fizz";
    // If the number is divisible by 5, but not 3
    else if (value % 5 === 0) return "Buzz";
    // if the number isn't divisible by 3 or 5
    else return value;
}