const inicio = 1;
const fin = 50;

let mutiploDe4 = 0;
let noMultiploDe4 = 0;

for (let i = inicio; i <= fin; i++) {
    if (i % 4 === 0) {
        if(i == 16){
            continue;
        }else if(i == 48) {
            break;
        }

        console.log(i)
    }else {
        noMultiploDe4++;
    }
}

console.log(noMultiploDe4);
console.log(mutiploDe4);