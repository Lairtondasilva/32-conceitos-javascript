//uma IIFE é uma maneira de definir e executar uma função imediatamente. 
//É útil quando você precisa isolar variáveis ou funções do escopo global, 
//evitando possíveis conflitos com outras partes do seu código.

//EXEMPLO:

(function() {
  // código da função aqui
  console.log("Esta função foi invocada imediatamente!");
})();

!function () {
    var name = "João";
    console.log("Olá, " + name);
} ();