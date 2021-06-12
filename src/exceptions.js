function enterPIN() {
    let pin = prompt("Enter PIN-number (max length 4):", "");
    if (pin.length > 4) {
        throw new Error("Line length greater than 4 characters");
    }
    return pin;
}


try {
    let result = enterPIN();
    console.log(result);
} catch (exception) { // error object
    // console.log(exception.name); // “Error”
    // console.log(exception.message); // “Line length greater than 4 characters”  
    for (let i in exception) {
        console.log(i + ": " + exception[i]);
    }

    console.log(exception[0]);
}
finally { console.log(`Finally block`); }


let exceptions = { "first": "1", "second": "2" }

for (let i in exceptions) {
    console.log(i + ": " + exceptions[i]);
}
