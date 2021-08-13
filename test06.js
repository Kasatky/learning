let rand = require ('./utils')
let b = rand(1,100)
let foo = () => {
  return b // редактируем где угодно, используем переменные
}

let result = foo


// вернуть случайное число от 1 до 100, но одинаковое при каждом обращении
module.exports = result