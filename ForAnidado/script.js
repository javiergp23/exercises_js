let resultado = 1;

for(let i = 1; i <= 10; i++){
    
    let resultado = 1;
    for(let j = 1; j <= i; j++){
        resultado = resultado * j;
    }

    console.log("Indice " + i + ": " + resultado);
}

console.log(resultado)