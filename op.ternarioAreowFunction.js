let isValid = true;

// sem ternario
function verify(isValid) {
    if (isValid) {
        return true;
    } else {
        return false;
    }
};

console.log(verify(isValid));

// com ternario
const result = isValid ? true : false;

let zero = 0;

const numeroResultado = zero == 0 ? 0 : -1;

console.log(numeroResultado);

// arrow function
// function tradicional
function soma(x, y) {
    return x + y;
};

const multiplicacao = function(x, y) {
    return x * y;
};

console.log(multiplicacao(5, 5));

// arrow function
const dividir = function(x, y) {
    return x / y;
};

const objeto = () => ({name: 'Monara', lastName: 'Calado'});