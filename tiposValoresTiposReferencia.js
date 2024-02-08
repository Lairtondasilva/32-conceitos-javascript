var x = 3;
var y = x;

x = 10;

console.log(x); //valor de x vai ser  10, pois a variável x foi alterada após o seu valor ter sido atribuído à outra variável "y";
console.log(y); //valor de y vai permanecer 3 pois ele recebeu  a referência da variável x e não sua cópia


