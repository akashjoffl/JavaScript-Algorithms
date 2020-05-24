function introduction(firstName, lastName) {
    const introduction = "Hi, my name is " .concat(firstName, " ", lastName, ".");
    return introduction;
}

// Write a function that takes in a string for your first name,
// a string for your last name and returns them formatted in the example below.


function introduction2(firstName, lastName) {
    const introduction = "Hi, my name is " + firstName + " " + lastName + ".";
    return introduction;
}

function introduction3(firstName, lastName) {
    return `Hi, my name is ${firstName} ${lastName}.`;
}

console.log(introduction3("Akash", "Jeganath"));


