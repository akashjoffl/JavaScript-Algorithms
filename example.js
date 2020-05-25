function fizzBuzz(num){
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    else if ( num % 3 === 0) {
        return "fizz";
    }
    else if (num % 5 === 0) {
        return "buzz";
    }
    return "";
}
 
console.log(fizzBuzz(3));
console.log(fizzBuzz(15));
console.log(fizzBuzz(10));
console.log(fizzBuzz(8));

// Write a function that if a number 3 or greater and is divisible by 3
// returns 'fizz', by 5 returns 'buzz', by both returns 'fizzbuzz', or none ''.

// 3 return 'fizz'
// 5 return 'buzz'
// 4 return ''
// 15 return 'fizzbuzz'


function fizzBuzz2(num) {
    let word = "";

    if (num % 3 === 0){
        word = word.concat("fizz");
    }

    if (num % 5 === 0) {
        word = word.concat("buzz");
    }
    return word;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(15));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(8));
