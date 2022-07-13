// Добавление computed property
/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */
// // examples
// const transaction = {
//   value: 170,
// };
// // input: object, key, value
// // output: object
function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// // input: target obj, obj1, obj2, ... objN
// // output: obj
function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}

// // const transaction = {
// //   value: 170,
// // };

// console.log(addPropertyV2(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }

// // -------------------------------------------------------------------------------------------------------

function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

// // const transaction = {
// //   value: 170,
// // };

// const res1 = addPropertyV4(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
// const res2 = addPropertyV4(res1, 'Kyiv', 300); // ==> { value: 170, Kyiv: 'city' }
// console.log(res1);
// console.log('result: ', res2);
// console.log('given obj', transaction);
// // -------------------------------------------------------------------------------------------------------

// option 1 (bad)
// function addPropertyV4(obj, key, value) {
//   const newObj = { ...obj, [key]: value };
//   return newObj;
// }

// option 2 (good)
function addPropertyV4(obj, key, value) {
  return { ...obj, [key]: value };
}

const transaction = {
  value: 170,
};

const res1 = addPropertyV4(transaction, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
const res2 = addPropertyV4(res1, 'Sparta', 300); // ==> { value: 170, Kyiv: 'city' }
console.log('result test 1: ', res1);
console.log('result test 2: ', res2);
console.log('obj after: ', transaction);
