var num1 = prompt('Ingresa el primer numero');
var num2 = prompt('Ingresa el segundo numero');

// document.write("El resultado de la división es: " + divide(num1, num2));

let divide = function(num1, num2) {
    let resultado = parseInt(num1) / parseInt(num2);
    return resultado;
}

document.write("El resultado de la división es: " + divide(num1, num2));
