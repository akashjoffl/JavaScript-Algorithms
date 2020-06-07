function repeatString(str, num) {
    let repeatString = "";

    while (num > 0) {
        repeatString = repeatString.concat(str);
        num--;
    }

    return repeatString;
}

console.log(repeatString('codinggod', 2));


// Repeat string