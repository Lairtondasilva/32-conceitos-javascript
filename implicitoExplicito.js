console.log(5 - "5"); // retorna um number com valor 0 pois o javascript entende que estamos querendo realizar uma subtração
console.log("5" + 5); //retorna uma string com valor "55" pois o sinal de mais nesse caso indica uma concatenação
console.log( true + true);// retorna um number com valor 2 pois  o operador "+" converte booleanos para numeros, e os valores verdadeiros são convertidos para 1 e falsos para  0.
console.log([] + []); //retorna uma string  vazia
console.log({} + {}); //retorna um [object Object] [object Object], pois o operador "+" é usado para concatenar strings, e os objetos não possuem a propriedade valueOf(), que seria utilizada pelo js para converter em número ou string.


//COERÇÃO IMPLICÍTA

console.log(+"5") //converte a string "5" para um number 5
console.log (5 + "") // converte o number 5 para uma string 5
console.log( 123 && "oi") // Vai ser impresso  "oi", pois é verdadeiro, e retorna o valor da direita do operador lógico AND
console.log( null || true) // retorna o valor true, pois null é considerado como falso em JavaScript 
console.log( [] && "oieeee") //

//COERÇÃO EXPLICITA

console.log(String([3,4,5])) //transforma os valores dentro do array numa String
console.log(Number("10")) // transforma as strings em numeros e

