function evalFor(value, param) {
    if (typeof param === 'object') {
        switch (param.operation) {
            case '+':
                return value + param.operand;
                break;
            case '-':
                return value - param.operand;
                break;
            case '*':
                return value * param.operand;
                break;
            case '/':
                return value / param.operand;
                break;
        }
    } else {
        return value;
    }
}

function Operation(operation, operand) {
    return {
        operation: operation,
        operand: operand
    }
}

function zero(x) {return evalFor(0, x)}
function one(x)  {return evalFor(1, x)}
function two(x)  {return evalFor(2, x)}
function three(x) {return evalFor(3, x)}
function four(x)  {return evalFor(4, x)}
function five(x)  {return evalFor(5, x)}
function six(x)  {return evalFor(6, x)}
function seven(x)  {return evalFor(7, x)}
function eight(x)  {return evalFor(8, x)}
function nine(x)  {return evalFor(9, x)}

function plus(x) {
    return Operation('+', x);
}

function minus(x) {
    return Operation('-', x);
}

function times(x) {
    return Operation('*', x);
}

function dividedBy(x) {
    return Operation('/', x);
}

function checkCalculations() {
    console.log(three(times(five())) === 15);
    console.log(four(plus(eight())) === 12);
    console.log(eight(minus(two())) === 6);
    console.log(six(dividedBy(three())) === 2);
}

checkCalculations();