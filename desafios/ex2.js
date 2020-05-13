const users = [
  { name: 'Pedro', year: 19, company: 'Rocketseat'},
  { name: 'Gabriel', year: 15, company: 'Rocketseat'},
  { name: 'Vinicius', year: 30, company: 'Facebook'},
];

// 1.
const years = users.map((item) => item.year);
console.log(years);

// 2. 
const rocketseatUsers = users.filter((items) => {
  if(items.year >= 18 && items.company == 'Rocketseat'){
    return items;
  }; 
});
console.log(rocketseatUsers);

// 3. 
const user2 = users.find(item => item.company == 'Google');
console.log(user2);

// 4.
const doubleYear = users.map(items => {

  items.year = items.year * 2;
  return items;

}).filter(items => items.year <= 50);

console.log(doubleYear);
