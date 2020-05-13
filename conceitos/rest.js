// 7. REST
// Serve para gente pegar o resto das propriedades

// 1. Example (Object)
const user = {
  name: 'Pedro Lucas',
  year: 19,
  email: 'pedro@mail.com'
}

const { name, ...rest } = user;

console.log(name);
console.log(rest);

// 2. Example (Arrays)

const numbers = [1, 2, 3, 4, 5];

const [a , b, ...n] = numbers;

console.log(a);
console.log(b);
console.log(n);

// 3. Example (Functions)

function soma(...params){
  return params.reduce((total, next) => total + next);
}

function sub(a, b, ...params){
  return params;
}

console.log(soma(1, 2, 3, 4));
console.log(sub(1, 2, 3, 4));

/*============================================================================================*/