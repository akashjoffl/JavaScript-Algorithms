function factorializeNumber(num) {
    let product = 1;

    for (let i = 1; i <= num; i++){
        console.log(i);
        console.log(product);
        product = product * i;
    }

    return product;
}

console.log(factorializeNumber(5));
//console.log(1 * 2 * 3 * 4 * 5);