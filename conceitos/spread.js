// 8. SPREAD
// Serve para juntar estruturas de dados.

// 1. Example (Array)

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

// 2. Example (Object)
// Podemos reatribuir o valor por meio do SPREAD

const user = {
  name: 'Pedro Lucas',
  year: 19,
  email: 'pedro@mail.com',
}

const user2 = { ...user, name: 'Gabriel', email: 'gabriel@mail.com'};

console.log(user2);

/*============================================================================================*/