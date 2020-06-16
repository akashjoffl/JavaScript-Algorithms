function missingNumber(numArr) {
    let sortArray = numArr.sort((num1, num2) => {
        return num1 - num2;
    });

    console.log(sortArray);

    for(let i = 0; i < sortArray.length; i++) {
        if (i !== sortArray[i]) {
            return i;
        }
    }

    return sortArray;

}


console.log(missingNumber([0, 1, 3, 4, 5, 6, 7, 8, 9]));
console.log(missingNumber([1, 2, 5, 6, 7, 9, 3, 4]));

// missingNumber