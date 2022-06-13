// filter method 

const numbers = [1,2,3,6,9,8]
const iseven = (number) => {
    return number%2===0;
}
console.log(iseven(numbers))
const evennumber =  numbers.filter(iseven)
console.log(evennumber)

// reduce_method


const numbers1 = [1,2,3,4,5,6]
// aim : sum of all the numbers in array
// accumulator   currentvalue   return
//    1              2            3
//    3              3            6
//    6              4            10
//    10             5            15
//    15             6            21
//  total = 21


const sumcurrentnumber = numbers1.reduce((accumulator,currentvalue) => {
    return accumulator+currentvalue
})
console.log(sumcurrentnumber)

const usercart = [
    {product : 1 , productName : 'mobile' , price : 12000},
    {product : 2 , productName : 'laptop' , price : 14000},
    {product : 3 , productName : 'computer' , price : 15000},
] 
const totalamount = usercart.reduce((totalprice,currentproduct) => {
    return currentproduct.price + totalprice
},0)
console.log(totalamount)

// sort method 

const numbers2 = [78,56,89,12,74,56]
numbers2.sort()
console.log(numbers2)

// filpcart sorting method 
// price lowtohigh hightolow

const products = [
    {product : 1 , productName : 'mobile' , price : 12000},
    {product : 2 , productName : 'laptop' , price : 14000},
    {product : 3 , productName : 'computer' , price : 15000},
    {product : 4 , productName : 'pc' , price : 14200},
    {product : 5 , productName : 'dashbord' , price : 15200},
    {product : 6 , productName : 'speker' , price : 11300},
]

// low to high 

const lowtohigh = products.sort((a,b) => {
    return a.price-b.price
})
console.log(lowtohigh)

const hightolow = products.sort((a,b) => {
    return b.price-a.price
})
console.log(hightolow)


// find method  every method get true false
// index wise 

const myarray = ['hello','cats','dog','lion']

const a = (ag) => {
    return ag.length === 3
}

const ans = a('dog')
console.log(ans)

const qw = myarray.find((string) => string.length===3)
console.log(qw)

const users = [
    {userID : 1 , userName : 'harshit'},
    {userID : 2 , userName : 'harsh'},
    {userID : 3 , userName : 'hitesh'},
    {userID : 4 , userName : 'mohit'},
    {userID : 5 , userName : 'aaditya'},
]

const myuser = users.find((user)=>user.userID ===3 )
console.log(myuser)

const isEven = (number) => {
    return number % 2 === 0
}

const an =  numbers2.every(isEven)
console.log(an)

const userCart = [
    {product : 1 , productName : 'mobile' , price : 12000},
    {product : 2 , productName : 'laptop' , price : 14000},
    {product : 3 , productName : 'computer' , price : 15000},
    {product : 4 , productName : 'pc' , price : 14200},
    {product : 5 , productName : 'dashbord' , price : 15200},
    {product : 6 , productName : 'speker' , price : 11300},
]

const cart = userCart.every((cartItem) => cartItem.price < 20000)
console.log(cart)

// some method 

// kya ek bhi number esa hai jo even hai 

const ch = numbers.some((num) =>  num%2===0)
console.log(ch)

// fill method 

//  value , start , end 

const my = new Array(10).fill(0)
console.log(my)

const array = [1,2,3,4,5,6,7,8,9]
array.fill(0,2,5)
console.log(array)


// splice method 
//  start , delete , insert 
// delete means number of eliment delete 

const fruit = ['mango' , 'banana' , 'kivi' , 'apple']
fruit.splice(2,1,'banana')
console.log(fruit)