// // Solicita al usuario la cantidad de días
// let dias = parseInt(prompt("Introduce la cantidad de días:"));

// // Verifica que la entrada sea un número válido
// if (isNaN(dias) || dias < 0) {
//     console.error("Por favor, introduce un número válido de días.");
// } else {
//     // Calcula la cantidad de semanas
//     let semanas = Math.floor(dias / 7);
    
//     // Calcula los días restantes usando el operador módulo
//     let diasRestantes = dias % 7;
    
//     // Muestra el resultado
//     console.log(`La cantidad de ${dias} días equivale a ${semanas} semanas y ${diasRestantes} días.`);
// }

let totalDias = parseInt(prompt("Ingrese los dias a calcular"));

let años = Math.floor(totalDias / 365);

let semanas = Math.floor((totalDias % 365) / 7);

let dias = (totalDias % 365) % 7;

alert(`${totalDias} días convertidos en ${años} año/s, ${semanas} semanas y ${dias} dias`)