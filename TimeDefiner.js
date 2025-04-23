let user = prompt('Enter time')
let name = prompt('Enter your name')
let splitTime = user.split(':')// by : => [7, 40]
console.log(splitTime)

let a = splitTime[0]
let b = splitTime[1]
let result = +a + +b/60 // without these pluses it will get it as string
console.log(result)

const Good  = () => {

    if(result >=6 && result <= 12){
        document.querySelector('#greeting').innerHTML = `Breakfast time, ${name}!`
    }
    else if (result > 12 && result <= 17){
        document.querySelector('#greeting').innerHTML=`Lunch time, ${name}!`
    } else {
        document.querySelector('#greeting').innerHTML=`Dinner time, ${name}!`
    }
}
Good()