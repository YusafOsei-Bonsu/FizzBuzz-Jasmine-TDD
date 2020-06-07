module.exports = FizzBuzz = (value) => {
    // If the number is divisible by 3 and 5
    if (value % 3 === 0 && value % 5 === 0) return "FizzBuzz";
    // If the number is only divisible by 3
    else if (value % 3 === 0) return "Fizz";
}