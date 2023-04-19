function Existe(numeros, valor){
    for(let i=0;i<numeros.length;i++){
        if(numeros[i]==valor) return true;
    }

    return false;
}

function Interpolacao(lista1, lista2){
    let array = [];

    for(let i=0;i<lista1.length;i++){
        for(let j=0;j<lista2.length;j++){
            if(lista1[i]==lista2[j]) {
                array.push(lista1[i]);
                break;
            }
        }
    }
    return array;
}

function InterpolacaoMenorComplexidade(lista1, lista2){
    let array = [];

    lista2 = lista2.sort(compare);

    for(let i=0;i<lista1.length;i++){
        if (BuscaBinaria(lista1[i], lista2)) array.push(lista1[i]);
    }

    return array;
}

function compare(a,b){
    if (a>b) return 1;
    else if (a<b) return -1;
    return 0;
}

function BuscaBinaria(valor, lista){
    let inicio = 0;
    let fim = lista.length;
    let meio;


    do{
        meio = Math.floor((inicio + fim) / 2);

        if(lista[meio] == valor) return true;
        else if(valor < lista[meio]) fim = meio - 1;
        else {
            inicio = meio + 1;
        }
        
    } while (inicio <= fim);

    return false;
}

lista1 = [1, 2, 3, 4, 5,6, 7, 8, 9];
lista2 = [1, 3, 5, 8, 10, 14];

console.log(InterpolacaoMenorComplexidade(lista1,lista2));