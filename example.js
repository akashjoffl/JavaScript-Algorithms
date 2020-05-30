function reverseString(input) {
    let splitString = input.split("");
    console.log(splitString);
    let reverseString = splitString.reverse();
    console.log(reverseString);
    let joingString = reverseString.join("");
    console.log(joingString);

    return joingString
}

console.log(reverseString('javascript'));
console.log(reverseString("codegod"));

//reversing a string