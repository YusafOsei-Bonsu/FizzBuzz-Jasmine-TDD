const fileSystem = require('fs');
const FizzBuzz = require('./FizzBuzz.js');
const path = "./spec/FizzBuzz.js";

describe('FizzBuzz', () => {
    // Checks if the file exists
    it('File should exist', () => expect(fileSystem.statSync(path)).toBeTruthy());

    // Testing Fizzbuzz with a number (i.e. 30) that's divisible by 3 and 5
    it("Should return 'FizzBuzz'", () => expect(FizzBuzz(30)).toEqual("FizzBuzz"));
});
