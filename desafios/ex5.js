// Rest

// 1.
const arr = [1, 2, 3, 4, 5, 6];

const [ a, ...rest] = arr;

console.log(a);
console.log(rest);

// 2.
function addAll(...params){
  return params.reduce((total, next) => total + next);
}

console.log(addAll(1, 2, 3, 4, 5));
console.log(addAll(1, 2));

// Spread
const user = {
  name: 'Pedro Lucas',
  year: 19,
  address: {
    city: 'Barra Bonita',
    state: 'SP',
    country: 'Brasil',
  }
 };

 const user2 = { ...user, name: 'Gabriel'};
 const user3 = { ...user, city: 'Lontras'};

 console.log(user2);
 console.log(user3);
