function longestWord(str) {
    let filteredArray = str.replace(/[\W_]/g, ' ').split(' ');
    let largest = "";

    filteredArray.forEach((word) => {
        largest = word.length > largest.length ? word : largest;
    });

    return largest;
}

console.log(longestWord('Ready, steady, goooooood!, [df]'));


// longestWord