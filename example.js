function duplicateNumbers(numArr){
    let sortArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });

    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] === sortArray[i + 1]){
            return true;
        }
    }

    return false;
}


console.log(duplicateNumbers([1, 2, 3, 1]));
console.log(duplicateNumbers([3, 1]));
console.log(duplicateNumbers([0, 4, 5, 0, 3, 6]));

// duplicateNumbers