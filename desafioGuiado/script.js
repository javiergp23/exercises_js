// imprimiendo factoriales
let calcularYmostrar = (num) => {
    if(num < 1 || num > 20 ){
        console.log("Numero fuera del rango");
        return false;
    }

    for(let i = 1; i <= num; i++){
        let resultado = i * num;
        console.log(`${i} * ${num} = ${resultado}`);
    }

    // ciclo for anidado
    for(let i = 1; i <= num; i++){
        let resultado = 1;
        for(let j = 1; j <= i; j++){
            resultado = resultado * j;
        }
        console.log(`Factorial de ${i} = ${resultado}`);
    }
    
}

calcularYmostrar(3);