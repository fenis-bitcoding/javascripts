// important array method 
const numbers = [4,2,45,6,7,8]
// const multiplybyz = (number,index) => {
//     console.log('index is ',index)
//     console.log(`${number}*2 = ${number * 2}`)
// }
// multiplybyz(numbers[0],0)
// multiplybyz(numbers[1],1)
const multiplybyz = (numbers) =>{
    for(let i = 0 ; i< numbers.length ; i++){
        console.log(numbers[i],'index',i)
        console.log(`${numbers[i]}*2 = ${numbers[i]*2}`)
    }
}
multiplybyz(numbers)


const myfunc8 = (number,index) => {
    console.log(`index is ${index} number is ${number}`)
} 
numbers.forEach(myfunc8)

console.log('------------------')


numbers.forEach(function(number,index){
    console.log(`index is ${index} number is ${number}`)
})

numbers.forEach(function(number){
    console.log(number*2)
})


const users = [
    {firstname : 'fenis' , age : '23'},
    {firstname : 'smit' , age : '23'},
    {firstname : 'pradip' , age : '23'},
]

users.forEach(function(user){
    console.log(user.firstname)
})

// use arrow functions
users.forEach((user) => {
    console.log(user.firstname)
})