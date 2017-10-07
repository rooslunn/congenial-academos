function evalo(digit, operation) {
    return operation ? eval(digit+operation) : digit
}
function zero(x) { return evalo(0, x); }
function one(x) { return evalo(1, x); }
function two(x) { return evalo(2, x); }
function three(x) { return evalo(3, x); }
function four(x) {return evalo(4, x); }
function five(x) { return evalo(5, x); }
function six(x) {return evalo(6, x); }
function seven() { return evalo(7, x); }
function eight(x) { return evalo(8, x); }
function nine(x) { return evalo(9, x); }

function plus(x) {
    return '+' + x;
}
function minus(x) {
    return '-' + x;
}
function times(x) {
    return '*' + x;
}
function dividedBy(x) {
    return '/' + x;
}

function checkCalculations() {
    console.log(three(times(five())) === 15);
    console.log(four(plus(eight())) === 12);
    console.log(eight(minus(two())) === 6);
    console.log(six(dividedBy(three())) === 2);
}

checkCalculations();