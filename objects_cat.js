let obj = { name: 'vasay', func:function(){ console.log('test'); } }

/*let result = function cat() {
	return 'cat'
}*/
let history = [];
let kitten = { 
	'body':1, 
	eyes: {left:1, right:1},

	info:function() {
		console.info(this)
		return this   //переменная this указывает на данный объект
	},
	catch (something)  { //тоже функция в сокращенном варианте, работает только в объектах
		let message = 'Котик поймал ' + something + '\n'
		history.push (message)
		console.info(message)
		return this //переменная this не работает в укороченных функциях со стрелочкой (убираем "ключ" двоеточие и стрелочку)
	},
	takesShower () {
		let message = 'Котик умылся \n'
		history.push (message)
		console.info(message)
		return this
	},
	wakeUp () {
		let message ='Котик проснулся \n'
		history.push (message)
		console.info (message) 
		return this
	},
	wink (eye) {
		let message = ''
		
		if (eye == 'right') 
		{
			message = 'Котик подмигнул правым глазом \n'
		}
		if (eye == 'left') 
		{
			message = 'Котик подмигнул левым глазом \n'   
		}
		history.push (message)
		console.info (message)

		return this
	},
	sleep: () => {
		let message = 'Котик устал и вырубился \n'
		history.push (message)
		console.info (message) 
	},
	loadHistoryMessage: function () {
		console.info (history)
		return '<pre>'+history.join('\n')+'</pre>'
		//return history.join('<br>')
	}
}

kitten.wink('left')
kitten.wink('right')
kitten.info().catch('мышку').takesShower().wakeUp().sleep()

kitten.loadHistoryMessage ()

module.exports = () => kitten.loadHistoryMessage()