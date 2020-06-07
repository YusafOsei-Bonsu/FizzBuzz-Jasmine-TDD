const fileSystem = require('fs');
const FizzBuzz = require('./FizzBuzz.js');
const path = "./spec/FizzBuzz.js";

describe('FizzBuzz', () => {
    // Checks if the file exists
    it('File should exist', () => expect(fileSystem.statSync(path)).toBeTruthy());

    // Testing Fizzbuzz with a number (i.e. 30) that's divisible by 3 and 5
    it("Should return 'FizzBuzz'", () => expect(FizzBuzz(30)).toEqual("FizzBuzz"));

    // Testing Fizzbuzz with a number (i.e. 6) that's divisible by 3, but not 5
    it("Should return 'Fizz'", () => expect(FizzBuzz(6)).toEqual("Fizz"));

    // Testing Fizzbuzz with a number (i.e. 10) that's divisible by 5, but not 3
    it("Should return 'Buzz'", () => expect(FizzBuzz(10)).toEqual("Buzz"));
});
