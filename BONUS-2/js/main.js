// TOFIX definisco una lista in cui inserirò i div da appendere listOfDivs
// const listOfDivs = []

// definisco una costante contenente il mio div contenitore
resultContainer = document.getElementById("result-container")

// creo un loop che itera da 1 fino a 100
for (let i=1; i <= 100; i++){

    //     creao una variabile result
    let result
    let classes

    //     se il numero è divisibile per 3 e per 5
    if (i % 3 === 0 && i % 5 === 0){
        result = "FizzBuzz"
        classes = "bg-red"
    } else if(i % 3 === 0) {
        result = "Fizz"
        classes = "bg-blue"
    } else if(i % 5 === 0){
        result = "Buzz"
        classes = "bg-green"
    } else {
        result = String(i)
        classes = "bg-gray"
    }

    //stampo a console result
    console.log(result)

    // creo un div contenente il valore di result
    const tempDiv = document.createElement("div")
    tempDiv.append(result)
    tempDiv.classList.add(classes)

    // appendo tempDiv a resultContainer
    resultContainer.append(tempDiv)
}


