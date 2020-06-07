const fileSystem = require('fs');
const FizzBuzz = require('./FizzBuzz.js');
const path = "./spec/FizzBuzz.js";

describe('FizzBuzz', () => {
    // Checks if the file exists
    it('File should exist', () => expect(fileSystem.statSync(path)).toBeTruthy());

    // Returning "FizzBuzz"
    it("Should return 'FizzBuzz'", () => expect(FizzBuzz(30)).toEqual("FizzBuzz"));
});
