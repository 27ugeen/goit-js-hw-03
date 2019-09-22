'use strict';

// Напиши функцию calculateTotalPrice(arr, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).
//=======================================================
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 }
];

const calculateTotalPrice = (arr, productName) => {
  let total = 0;
  for (const ar of arr) {
    const values = Object.values(ar);
    for (const value of values) {
      if (productName === value) {
        total = values[1] * values[2];
      }
    }
  }
  return `Общая стоимость продукта: ${total}`;
};
//====================================================
// Вызовы функции для проверки работоспособности твоей реализации.

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
