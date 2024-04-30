// creo un loop che itera da 1 fino a 100
for (let i=1; i <= 100; i++){

    //     creao una variabile result
    let result

    //     se il numero è divisibile per 3 e per 5
    if (i % 3 === 0 && i % 5 === 0){
        result = "FizzBuzz"

    } else if(i % 3 === 0) {
        result = "Fizz"
    } else if(i % 5 === 0){
        result = "Buzz"
    } else {
        result = String(i)
    }

    //stampo a console result
    console.log(result)
}
