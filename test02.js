let foo = (something, whatever, nothing='') => {
  return 'Hello '+whatever+'!'
}

let result = foo('','World')


// экспортировать "Hello World!"
module.exports = result