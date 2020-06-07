## Project Brief
This mini project concentrates on developing FizzBuzz using TDD via Jasmine.

## Tech Stack
- JavaScript
- Jasmine

## Setting-up the Project
1. Entered `npm install --save-dev jasmine` into the terminal to locally install the Jasmine package.
2. Entered `npx jasmine init` into the terminal to initialise a project for Jasmine.
3. Set Jasmine as the test  (i.e. `"scripts": { "test": "jasmine" }`) in `package.json`.
4. Installed the `jasmine-spec-reporter` package to increase readability of test results. In addition, the below code was written in a JS file (i.e. `reporter.js`), which resided in the `helpers` directory within the `spec` directory...
```javascript
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
        displayPending: true
    }
}));
```

## What did I do?
After setting up Jasmine for this TDD mini-project, I proceeded with creating a failing test that checks the scenario where FizzBuzz function returns "FizzBuzz", in response to being provided with a number that's divisible by 3 and 5. Next, I tested the scenario where the FizzBuzz function is provided with a number that's divisible by 3, but not 5. After this, I tested the scenario where the FizzBuzz function is provided with a number that's divisible by 5, but not 3. Finally, I tested the scenario where the FizzBuzz method is provided with a number that isn't divisible by 3 or 5. The tests were executed by entering `npm test`.

## Blockers/Resolutions
- Initially, I couldn't comprehend Jasmine's test results, due to being presented by green/red dots. To resolve this, I installed and used the [jasmine-spec-reporter](https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/node) package.