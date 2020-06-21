function digitalSum(str) {
    const nums = str.match(/\d+/g) || [];
    let sum = 0;

    nums.forEach((num) => {
        sum += Number(num);
    });

    return sum;
}

console.log(digitalSum('2 apples, 12 oranges'));
console.log(digitalSum('12323440'));
console.log(digitalSum('Your payment is declined'));

// digitalSum