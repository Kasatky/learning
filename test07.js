let foo = (arg1, arg2) => {
	let foobar = (arg3) => {
		return arg3 * 3
	}
	return foobar(arg1 + arg2)
}

let result = foo (1.5,1.5) // редактируем только эту строку


// вывести 9
module.exports = result