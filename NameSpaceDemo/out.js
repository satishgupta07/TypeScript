var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFees(daysLate) {
            return daysLate * .25;
        }
        Fees.calculateLateFees = calculateLateFees;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        if (age < 12) {
            return 3;
        }
        else {
            return 10;
        }
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc() {
        console.log('This is private...');
    }
})(Utility || (Utility = {}));
/// <reference path="utilityFunctions.ts" />
var util = Utility.Fees;
var fee = util.calculateLateFees(10);
console.log("Fee: " + fee);
