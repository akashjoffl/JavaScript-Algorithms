function titleCase(str) {
    let titleCasedSentence = str.split(" ");
    //console.log(titleCasedSentence);

    titleCasedSentence = titleCasedSentence.map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();

        word = firstLetter.concat(word.slice(1, word.legth));

        return word;
    });

    titleCasedSentence = titleCasedSentence.join(' ');

    return titleCasedSentence;

}

console.log(titleCase("I am a coding goat"));


// titleCase