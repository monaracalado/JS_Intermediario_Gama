let lista = [1, 2, 5];
let listaIncluir = [3, 4];

console.log(lista);
console.log(listaIncluir);

for (let i = 0; i < listaIncluir.length; i++) {
    for (let j = 0; j < lista.length; j++) {
        if (lista[j] >= listaIncluir[i]){
            lista.splice(j, 0, listaIncluir[i]);
            j++;
        }
    }
}

console.log(lista);

// forma mais simples
const listResult = [1, 2, ...listaIncluir, 5];

console.log(listResult);

// outros modelos
let array = ['a', 'b', 'c'];
let array2 = [...array];

array2.push('d');

console.log(`Array = ${array}`)
console.log(`Array2 = ${array2}`)
