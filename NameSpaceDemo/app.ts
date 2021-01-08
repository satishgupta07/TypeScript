/// <reference path="utilityFunctions.ts" />

import util = Utility.Fees;

let fee = util.calculateLateFees(10);
console.log(`Fee: ${fee}`);