let miVariable = 10;// variable global

function miFuncion(){
    let miVariable = 5;// se declara una nueva variable local al usar var
    
    console.log(miVariable)
}
debugger;
console.log(miVariable)
miFuncion();
console.log(miVariable)