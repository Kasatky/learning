let drivers = [
    {car:'renault', location: 'nevskiy', tel:7911 },
    {car:'nissan', location: 'ligovskiy', tel:7921 },
    {car:'toyota', location: 'devaytkino', tel:7962 },
    {car:'mersedes', location: 'raz"ezhaya', tel:7950 },
    {car:'bmw', location: 'dumskaya', tel:7952 },
    {car:'tesla', location: 'sadovaya', tel:7999 },
]

let foundCar = drivers.find (
    function (driver) {
        return driver.location == 'nevskiy'
    }
)

console.info('К вам едет водитель с номером ' + foundCar.tel + ', марка авто ' + foundCar.car)