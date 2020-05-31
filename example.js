function longestLength(str) {
    let longestLength = 0;
    let strArray = str.split(" ");

    strArray.forEach((word) => {
        //console.log(word);
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    return longestLength;
}

console.log(longestLength("I work for Google"));

//Longest Length