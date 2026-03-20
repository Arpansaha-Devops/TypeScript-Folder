// The 'never' type in TypeScript represents a value that will never occur.


// Example of a function that never returns:
function throwError(message: string): never {
    throw new Error(message);
}

// Example of a function that has an infinite loop: 

function infiniteLoop(): never {
    while (true) {
        // Do something indefinitely
    }   
}

// Example of a function that uses 'never' in a switch statement:
function processValue(value: string | number): string {
    switch (typeof value) {     
        case 'string':
            return `You passed a string: ${value}`;
        case 'number':  
            return `You passed a number: ${value}`;
        default:
            // This case should never happen, so we can use 'never' to indicate that
            const _exhaustiveCheck: never = value;
            return _exhaustiveCheck; // This line will never be reached
    }
}

// Example of a function that uses 'never' to indicate an unreachable code path:
function assertNever(value: never): never {
    throw new Error(`Unexpected value: ${value}`);
}