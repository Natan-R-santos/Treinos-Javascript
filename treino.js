const numeros = [1,2,3,4,5,6,7,8];
// .pop() remove e retorna o último da lista elemento: 8
const ultimoNumero = numeros.pop(); 

const par = (numero) => numero % 2 == 0;

// Passa o número extraído (8) para a função par()
if(par(ultimoNumero)){
    // Usa crases `` para interpolar a variável ${}
    console.log(`Esse número (${ultimoNumero}) é par`);
} else {
    console.log(`O número ${ultimoNumero} é ímpar`);
}
 //**ATIVIDADE 2*/
const valores = [10,8,1,3,9,4,2];
const primeiroNumero = valores.shift();
const maiorQue = (valor1) => valor1 >= 6;
if(maiorQue(primeiroNumero)){
    valores.push(primeiroNumero);
}else{
    valores.unshift(primeiroNumero);
}
console.log(valores);
console.log(primeiroNumero);
//** ATIVIDADE 3*/

const notas = [1,2,3,4,5,6,7,8];
const primeiraNota = notas.shift();
const menorquecinco = (nota1) => nota1 < 5;
if(menorquecinco(primeiraNota)){
    notas.unshift(primeiraNota);
}else{
    notas.push(primeiraNota);
}
console.log(notas);
console.log(primeiraNota);

//**ATIIVDADE 4*/
const temperaturas = [12, 18, 25, 9, 30, 15];
const ultimoValor = temperaturas.pop();
const verificarTemp = (temp1) => temp1 > 20;
if(verificarTemp(ultimoValor)){
    temperaturas.unshift(ultimoValor)
}else{
    temperaturas.push(ultimoValor);
}
console.log(ultimoValor);
console.log(temperaturas);