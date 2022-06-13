//  sets ( it is iterable)
//  store data 
//  set also have its own methods
//  no index-based access
//   order is not guarented
// unique items only (no duplicates allowed)

const numbers = new Set([1,2,3,4,7,2,3,2,3])
console.log(numbers)

//  add element  ---- add method
 numbers.add(12)
 numbers.add(16)
 numbers.add(18)

console.log(numbers)


// if(numbers.has(4)){
//     console.log(4,' is present')
// }else{
//     console.log('not present')
// }

for(let char of numbers){
    console.log(char)
}

console.log(numbers.length)

// important  :----------------------------

let length = 0
for(let element of numbers){
    length++
}

console.log(length)

// object literal
//  key -> strings
//  key -> symbol

const person = {
    firstname : 'harshit',
    age : 7,
    1 : 'one'
    //   symbol
}

//  key value pair
const persons = new Map()
persons.set('firstname','harshit')
persons.set('age', 2)
console.log(persons)
console.log(persons.keys())