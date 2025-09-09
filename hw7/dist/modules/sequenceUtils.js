export function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }
    const fib = [0];
    if (n === 1) {
        return fib;
    }
    fib.push(1);
    while (true) {
        const next = fib[fib.length - 1] + fib[fib.length - 2];
        if (next > n)
            break;
        fib.push(next);
    }
    return fib;
}
export function generatePrimeNumbers(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j * j <= i; j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            primes.push(i);
    }
    return primes;
}
//# sourceMappingURL=sequenceUtils.js.map