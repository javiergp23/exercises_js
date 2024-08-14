function generarParentesis(n) {
    const resultado = [];
 
    function backtrack(combinacionActual, aperturas, cierres) {
        if (combinacionActual.length === n * 2) {
            resultado.push(combinacionActual);
            return;
        }
 
        if (aperturas < n) {
            backtrack(combinacionActual + "(", aperturas + 1, cierres);
        }
 
        if (cierres < aperturas) {
            backtrack(combinacionActual + ")", aperturas, cierres + 1);
        }
    }
 
    backtrack("", 0, 0);
    return resultado;
}
 
console.log(generarParentesis(3));