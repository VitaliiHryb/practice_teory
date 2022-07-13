// Винтажный JS — bind, call и apply своими руками
// «напишите свою реализацию метода bind»

// 1 что вообще делают методы bind, call и apply?

// const user = {
//   fullName: 'Иван Человеков',
// };

// function getName() {
//   return this.fullName;
// }

// console.log(getName());

// console.log(getName.bind(user)());
// const result = getName.bind(user);
// console.log(result());

// const user = {
//   fullName: 'Иван Человеков',
// };

// function getName() {
//   return this.fullName;
// }

// // bind самостоятельно не вызывает функцию
// console.log(getName.bind(user)()); // Иван Человеков

// call & apply самостоятельно вызывают ф-ю
const user = {
  firstName: '',
  lastName: '',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function getFullName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return this.fullName();
}

console.log(getFullName.bind(user, 'Иван', 'Человеков')());
console.log(getFullName.bind(user, 'Иван')('Человеков'));
console.log(getFullName.bind(user)('Иван', 'Человеков'));

console.log(getFullName.call(user, 'Raptor', 'Pidor'));

console.log(getFullName.apply(user, ['Pidor', '4444']));

// написание собственной функции bind

// input: function (контекст которой нужно поменять)
// output: function (контекст которой заменён на полученный объект)

function bind(fn, context) {
  return function () {
    // Формируем уникальную строку (used current time)
    const uuid = Date.now().toString();
    // создаём новое поле у объекта и кладём туда нашу функцию
    context[uuid] = fn;
    // помещаем вызов функции в новую переменную
    const res = context[uuid]();
    // возвращаем объекту контекста изначальное состояние
    delete context[uuid];
    // возвращаем переменную с функцией
    return res;
  };
}

// Теперь нужно разобраться с аргументами. Как помните, аргументы могут быть переданы как в саму функцию bind, так и в возвращаемую функцию. И нам нужно обработать оба варианта.
function bind(fn, context, ...rest) {
  return function (...args) {
    const uuid = Date.now().toString();
    context[uuid] = fn;
    const res = context[uuid](...rest, ...args);
    delete context[uuid];
    return res;
  };
}
