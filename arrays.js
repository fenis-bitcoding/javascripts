// array means ordered collection of elements

let fruits = ['mango','apple','kivi']
console.log(fruits[0])
let number = [1,2,3,45,5,8]
console.log(number)
// change element value
fruits[1] = 'banana'
console.log(fruits)
console.log(typeof(fruits))
// cheack type of array
console.log(Array.isArray(fruits))
// add value in last
fruits.push('apple')
console.log(fruits)
// delete iteam in last
let popfruit = fruits.pop()
console.log(fruits)
console.log(popfruit)

fruits.unshift('apple')
console.log(fruits)

fruits.shift()
console.log(fruits)

// clone array concepts

let num1 = 6
let num2 = num1;
console.log('num1 : ',num1)
console.log('num2 : ',num2)
num1 = 4
console.log('num1 : ',num1)
console.log('num2 : ',num2)

let array1 = ['itam1','itam2']
let array2 = array1

console.log('array1 : ',array1)
console.log('array2 : ',array2)
array1.push('orenge')
console.log('array1 : ',array1)
console.log('array2 : ',array2)

    
// clone array1

let array3 = ['item1','item2']
let array4 = array3.slice(0)
array3.push('item3')
// 2ND method 
let array5 = [].concat(array3)
console.log(array5,'...')
console.log('array3 : ',array3)
console.log('array4 : ',array4)

// new way  --- sprad opraters
let array6 = [...fruits,...array1]
console.log('array6 : ',array6)



// for loop in array 
let fruits1 = ["apple",'mango','orange','kivi']

for(let i = 0 ;i<fruits1.length ;i++){
    console.log(fruits1[i])
}


let fruits2 = []
for(let i = 0 ; i < fruits1.length;i++){
    fruits2.push(fruits1[i])
}
console.log(fruits2,'fruits2')



const fruits3 = ["apple",'mango','orange','kivi']
let i = 0 
while(i<fruits3.length){
    console.log(fruits3[fruits3.length-i-1])
    i++;
}
// fruits.map((data) => {
    //     console.log(data);
    // })
    
    // for of loop 
    
    for(let frut of fruits3){
        console.log(frut)
    }
    
    
    // for in loop give index number
    
const fruits4 = ["xyz","yyyy","apple",'mango','orange','kivi']
const fruits5 = []
for(let frt in fruits4){
    console.log(fruits4[frt])
}

//  array destructuring

const destructure = ['juice', 'lemon']
const [v1,v2] = destructure
console.log(v1)
console.log(v2)