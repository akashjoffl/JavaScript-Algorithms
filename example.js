function longestLength(str) {
    let longestLength = 0;
    let strArray = str.split(" ");
    
    for (let i = 0; i < strArray.length; i++) {
        if (longestLength < strArray[i].length) {
            longestLength = strArray[i].length;
        }
    }

    return longestLength;
}

console.log(longestLength("I work for Google"));

//Longest Length