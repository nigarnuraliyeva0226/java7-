let a = prompt ("Eded daxil edin");
function isPrime (num) {
    let i = 2;
    if (num < 2) {
        return false;
    }
    while (i < num ){
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}
while (a >= 0) {
    if (isPrime(a)) {
        console.log(a);
    }
    a--;
}