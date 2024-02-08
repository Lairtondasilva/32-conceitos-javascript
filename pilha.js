//PILHAS DE CHAMADAS DO JAVASCRIP

// FIFO - First in , first out. O primeiro que entrou é o primeiro a sair.
// LIFO - Last in, first out. O último que entrou é o primeiro a sair.

//Se uma função chama outra função no javascript, a função que está sendo chamada será executada primeiro, ou seja,
//temos o exemplo de LIFO.

//exemplo:

function function1(){
  function2()
  console.log("Executando função 1")
}

function function2(){
  function3()
  console.log("Executando função 2")
}

function function3(){
  console.log("Executando função 3")
}

function1();