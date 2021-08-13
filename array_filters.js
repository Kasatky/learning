let cats = [
    { name: 'Rizhik',colour: 'foxy' },
    { name: 'Pushok', colour: 'black' },
    { name: 'Snezhok', colour: 'black' }
]

let foundCat = cats.find(
    function (dog){
        return dog.name == 'Pushok'
    }
)

let filterCat = cats.filter(
    function (dog){
        return dog.name == 'Pushok'
    }
)

//console.info(foundCat)
console.info(filterCat)