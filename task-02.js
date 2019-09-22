'use strict';

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

//========================================================
// const countProps = obj => {
//   let total = 0;
//   for (const key in obj) {
//     total += 1;
//   }
//   return `Всего свойств: ${total}`;
// };
//=========================================================

//== Я так понимаю  можно посчитать через ключи или через свойства - без разницы?===
//== Object.keys / Object.values ==
//=========================================================
const countProps = obj => {
  const values = Object.values(obj);
  let total = 0;
  for (const value of values) {
    total += 1;
  }
  return `Всего свойств: ${total}`;
};
//==========================================================
// Вызовы функции для проверки работоспособности твоей реализации.
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
