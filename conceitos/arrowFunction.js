// 4. Arrow Function
  // Se ela receber apenas um parametro não precisa de parenteses
  // Se o retorno for apenas uma linha, podemos tirar o return.

  const arr = [1, 3, 4, 5, 8, 9];

  const array = arr.map(item => item * 2);
  
  console.log(array);
  
  const teste = () => ({ nome : 'Pedro Lucas' });
  
  console.log(teste());
  
  /*============================================================================================*/
  