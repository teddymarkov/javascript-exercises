/*
 * Write a function that receives a positive number and returns a list of all
 * the positive factors(exact divisors) of that number.
 * A factor (exact divisor) of a number is another number that divides evenly
 * the first one.
 */


exports.calcFactors = num => {
    let factors = [];
    if (!Number.isInteger(num)) {
        throw 'Parameter is not a number.';
    }
    else if (num < 1) {
        throw 'Parameter is less than 1.';
    }
    for (let i = 1; i <= num + 1; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors
};
