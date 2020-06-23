function amendTheSentence(str) {
    let strArray = str.split("");

    for (i = 0; i < strArray.length; i++) {
        if (strArray[i] !== strArray[i].toLowerCase());
        strArray[i] = strArray[i].toLowerCase();
        strArray.splice(i, 0, ' ');
    }

    strArray = strArray.join("").trim("");

    return strArray;
}


console.log(amendTheSentence('CodingGodDoesWorkSon'));
console.log(amendTheSentence("Ain'tNoFunIfTheHomieDon'tCodeNone"));

//amendTheSentence