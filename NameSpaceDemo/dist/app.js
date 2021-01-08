"use strict";
/// <reference path="utilityFunctions.ts" />
var util = Utility.Fees;
var fee = util.calculateLateFees(10);
console.log("Fee: " + fee);
