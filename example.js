function isValidTime(time) {
    let timeArray = time.split(':');

    if (timeArray[0] > 23) {
        return false;
    } else if (timeArray[1] > 59) {
        return false;
    }

    return true;
}

console.log(isValidTime('24:00'));
console.log(isValidTime('23:59'));
console.log(isValidTime('12:40'));
console.log(isValidTime('23:69'));


// validTime