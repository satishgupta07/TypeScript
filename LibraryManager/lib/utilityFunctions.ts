export function calculateLateFees(daysLate: number): number {
    return daysLate* .25;
}

export function maxBooksAllowed(age: number): number {
    if(age <12) {
        return 3;
    }
    else {
        return 10;
    }
}

function privateFunc(): void {
    console.log('This is private...');
}

export function Purge<T>(inventory: Array<T>): Array<T> {
    // implement fancy logic here...
    return inventory.splice(2, inventory.length);
}

  
