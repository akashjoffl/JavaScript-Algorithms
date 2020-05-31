function longestLength(str) {
    let longestLength = 0;
    let strArray = str.split(" ");

    strArray.forEach((word) => {
        //console.log(word);
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    return longestLength;
}

function longestLength2(str) {
    let longestLength = str.split(" ").sort((word1, word2) => {
        return word2.length - word1.length;
    })[0].length;

    return longestLength;
}

console.log(longestLength2("I work for Google"));

//Longest Length