let celsius = parseFloat(prompt("Ingrese el valor en grados Celsius"));

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

alert(`El valor en Kelvin es ${kelvin} y en Fahrenheit es ${fahrenheit}, celsius: ${celsius}`);