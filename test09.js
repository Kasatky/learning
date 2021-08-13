let foo = (arg1, arg2) => {
    if (arg1 === 5) {
       return 'нет'
    } else if (arg2 === '55') {
       return 'да'
    } else {
        return 'вообще ни капли'
    }
}

let result = foo(null,'55')


// вывести на экран "да"
module.exports = result