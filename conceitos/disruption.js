// 6. Desestruturação
const user = {
  name: 'Pedro Lucas',
  year: 19,
  address: {
    city: 'Barra Bonita',
    state: 'SP',
  },
};

const { name, year, address: { city } } = user;

console.log(name, year, city);

function showName({ name, year }) {
  console.log(name, year);
}

showName(user);