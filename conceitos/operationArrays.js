// 3. Operações em Arrays
const arr = [1, 3, 4, 5, 8, 9];

// map() - Percorre o array: recebe cada item do array como parametro, e o index também
const newArr = arr.map(function(item , index){
  return item + index;
});

console.log(newArr);

// reduce() - Consumir todo o array e transformar em algo unico. 
  // total - pega o valor atual do vetor, começando em 0.
  // next - pega o proximi item do array

const sum = arr.reduce(function(total, next){
  return total + next;
});

console.log(sum);

// filter() - filtra uma informação dentro do array. 
  // true - coloca o item em um novo array. 
  // false - remove o item do novo array
const par = arr.filter(function(item) {
  return item % 2 === 0;
});

console.log(par);

// find() - Verifica se existe alguma informação dentro do array.
const find = arr.find(function(item) {
  return item === 4;
});

console.log(find);

/*============================================================================================*/