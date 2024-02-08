//Podemos utilizar o typeof para consultar os tipos primitivos  de dados em JavaScript.//
console.log(typeof "teste"); //retorna string, pois é uma constante de texto.
console.log(typeof 123);   //retorna number, pois é um valor numérico.
console.log(typeof true);  //retorna boolean, pois é um tipo lógico.
console.log(typeof new Boolean(false));  //retorna object, pois é um objeto criado a partir da função Boolean
console.log(typeof new Boolean(false).valueOf()); //retorna boolean, pois chama o método valueOf do objeto que retorna o valor original
console.log(typeof [1, 3, 4])     //retorna object também, pois é um array.
