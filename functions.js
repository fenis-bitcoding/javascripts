function SingHappyBirthday(){
    console.log('happy birthday to you.....')
}
SingHappyBirthday()

function add(){
    console.log(2+4)
}
add()

function oddevan(arg){
    for(let i = 0; i<=arg;i++){
        if(i%2===0){
            console.log(i)
        }
    }
}
oddevan(10)

function findtaget(arg,target){
    for(let i = 0 ; i<arg.length; i++){
        if(arg[i] === target){
            return i
        }
    }
    return -1
}

const myarray = [1,3,5,90,45,4,67]
console.log(findtaget(myarray,45))

// function expresion
// 2nd method to define functions 
const song = function(){
    console.log('helloo test')
}
song()

// arrow functions

const arrowfunc = () => {
    console.log('this is arrow functions')
}
arrowfunc()


//  function inside functions

// note ::-- function inside function call function in inside function 

// type of functions define 
// function myvar(){} 
// const myfunc2 = function(){}
// const myfunc3 = () => {}


// note ---------------------------

// block scope vs function scope 

// ---> let and const are block scope

// ---> var is function scope 

// define block 
// {
// 
// }

// defualt parameters

function addtwo(a,b=10){
    return a+b
}
console.log(addtwo(4,25))

// rest parameter

const myfunc4 = (a,b,c) => {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myfunc4(2,4,6)


const myfunc5 = (a,b,...c) => {
    console.log(`a is ${a}`)
    console.log(`b is ${b}`)
    console.log(`c is ${c}`)
}
myfunc5(2,4,6,3,4,5,6,7,8,7)

const addall = (...arg) => {
    let total = 0;
    for(let number of arg){
        total = total + number
    }
    return total 
}

const ans = addall(3,4,4,6,8)
console.log(ans)

// param destructuring 
// object
// react

const persons = {
    firstname : 'fenis',
    gender : 'male'
}
const printdetail = (obj) => {
    console.log(obj.firstname)
    console.log(obj.gender)
}
// parameter destructuring
printdetail(persons)
const printdetaill = ({firstname,gender}) =>{
    console.log(firstname)
    console.log(gender)
}
printdetaill(persons)


// callback functions

function myfunc6(name){
    console.log('inside my func 2')
    console.log(`your name is ${name}`)
}

function myfunc7(callback){
    console.log('hello there i am a func and i can..')
    callback('fenis')
}
myfunc7(myfunc6)

 