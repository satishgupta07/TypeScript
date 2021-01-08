"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purge = exports.maxBooksAllowed = exports.calculateLateFees = void 0;
function calculateLateFees(daysLate) {
    return daysLate * .25;
}
exports.calculateLateFees = calculateLateFees;
function maxBooksAllowed(age) {
    if (age < 12) {
        return 3;
    }
    else {
        return 10;
    }
}
exports.maxBooksAllowed = maxBooksAllowed;
function privateFunc() {
    console.log('This is private...');
}
function Purge(inventory) {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}
exports.Purge = Purge;
