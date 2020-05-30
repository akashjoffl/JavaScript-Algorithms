function reverseString(word) {
    let reverseWord = word.split("");
    console.log(reverseWord);

    reverseWord = reverseWord.reverse();
    console.log(reverseWord);

    reverseWord = reverseWord.join("");
    console.log(reverseWord);
}

console.log(reverseString('javascript'));
console.log(reverseString("codegod"));

//reversing a string