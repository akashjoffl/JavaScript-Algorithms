function isPalindrome(str) {
    let forwardStr = str.toLowerCase().replace(/[\W_]/g, "");
    let reversedStr = forwardStr.split("").reverse().join("");

    return forwardStr === reversedStr;
}

console.log(isPalindrome('javaScri_ pt'));
console.log(isPalindrome("momom"));

//Palindrome