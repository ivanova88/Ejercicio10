const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683]

let pares = number.filter(function(num){
return num % 2 == 0;
});

console.log(pares)

let numeros =[2,3,4];
let dobles = numeros.map(function(num){
  // este valor que devuelve,
  // pasa a ser un element del nuevo array
  return num*2;
})
console.log(dobles);
//resultado -> [4, 6, 8]