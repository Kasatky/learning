let numbers = [3,6,9]

let cat = {legs:4,eyes:2,tail:1}

/*for (let property of cat) {  //of не работает с объектами
    console.info(element)
}
*/

/*for (let property in cat) {    //можно применять и к объектам и к массивам
    let value = cat[property]
    value++
    console.info(property, value)

}*/

/*for (let i in numbers) {
    let value = numbers[i]
    value++
    console.info(i,value)
    // element=element+1
    // console.info(numbers)
}
*/

/*for (let element of numbers) {    // нельзя применять к объектам, только к массивам
    element = element+1
    console.info(element)
}
*/

//console.info(numbers)


numbers.forEach(
    function(element,i) {
        numbers[i]++ //обращаясь к ключу(индексу) можно поменять значение в самом массиве
        //element++  //меняем значение элемента только в цикле
        console.info(i,element)
    }
)

console.info(numbers)


cat = { name : 'Tom' }
let a = cat
b = cat
cat.name = 'Jerry'


console.info(a,b)