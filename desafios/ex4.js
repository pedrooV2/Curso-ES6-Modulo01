const company = {
  name: 'Rocketseat',
  address: {
    city: 'Rio do sul',
    state: 'SC'
  }
};

// 1. Desestruturação simples
const { name, address: { city, state}} = company;

console.log(name);
console.log(city);
console.log(state);

// 2. Desestruturação em parâmetros

const user = {
  name: 'Pedro Lucas',
  year: 19
};

function showInfo({ name, year }){
  return `${name} tem ${year} anos`;
}

console.log(showInfo(user));