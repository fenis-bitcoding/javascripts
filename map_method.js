// important map method 

const numbers = [1,4,7,9,2,6,8,3,'fgfg','gygug']
const square = (number) => {
    // if use map method so use return statment 
    // don't use console.log
    return number * number ;
}
const squareNumber = numbers.map(square)
console.log(squareNumber)

const squareNumber1 = numbers.map((number,index) => {
    return ` index : ${index}  -number : ${number *number}`
})
console.log(squareNumber1)
const users = [
    {firstname : 'fenis' , age : 23},
    {firstname : 'smit' , age : 23},
    {firstname : 'pradip' , age : 23},
]

const userName = users.map((user) => {
    return user.firstname
})
console.log(userName)


numbers.map((arg) => {
    console.log(arg)
})


let fruits = ['mango','apple','kivi']

fruits.map((data) => {
        console.log(data);
    })