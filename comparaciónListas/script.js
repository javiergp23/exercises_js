// Listas de frutas 
const listaFrutasA = [ 
    "manzana", "banana", "pera", "naranja", "uva", "mango", "piña", "fresa", "sandía", "melón" 
]; 
const listaFrutasB = [ 
    "limón", "cereza", "pera", "kiwi", "banana", "durazno", "piña", "mango", "manzana", "papaya" 
];

for(let i = 0; i < listaFrutasA.length; i++){
    const frutaA = listaFrutasA[i];

    for(let j = 0; j < listaFrutasB.length; j++){
        const frutaB = listaFrutasB[j];
        if(frutaA === frutaB){
            console.log(frutaA);
        }
    }
    console.log(frutaA);
}