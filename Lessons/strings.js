
let str = 'Hello "big" world\u25ba→';
let str2 = 'Hello \'big\' world';

console.log(str);
// \n - новая строка
// \r\n - 
// \t - tab

let w = str[12];

console.log(w, str.indexOf('world')); // найти элемент в массиве
console.log(str.indexOf('777')); // -1 not found

let arr = [1,3,5,7,9];
console.log(arr.indexOf(3));

let colors = ['red', 'green', 'blue'];

if (colors.indexOf('yellow') == -1)
{
	console.log('unknown color');
}

let words = str.split(' '); // разделить строку  в массив
console.log(words);

