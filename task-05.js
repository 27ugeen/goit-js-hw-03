'use strict';

// Напиши функцию getAllPropValues(arr, prop),
// которая получает массив объектов и имя ключа.
// Возвращает массив значений определенного поля prop
// из каждого объекта в массиве.
//======================================================
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 }
];

const getAllPropValues = (array, prop) => {
  let result = [];

  for (const arr of array) {
    const keys = Object.keys(arr);
    for (const key of keys) {
      if (key === prop) {
        result.push(arr[key]);
      }
    }
  }
  return result;
};
//======================================================
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
