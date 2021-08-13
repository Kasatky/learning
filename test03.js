let foo = () => {
  return [1,2,3].join(' ') // редактируем здесь
}

let result = foo()


// экспортировать "1 2 3"
module.exports = result