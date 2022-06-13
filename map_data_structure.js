// maps 
// map is an iterable 

// store data in ordered fashion 

// store kay value pair (like object )
// duplicate keys are not allowed like objects 

// different between maps and objects  

// objects can only have string or symbol as key 

// in maps you can use anything as key  
// like array , number , string 


// object literal 
// key --> string 
// key --> symbol 

const person = {
    firstName : 'harshit',
    age : 7,
    1 : 'one'
}
console.log(person)
console.log(person[1])
// for(let key in person){
//     console.log(typeof key)
// }

// map means zip  data add in key value pair 

const persons = new Map()
persons.set('firstname' , 'harshit')
persons.set('age',7)
console.log(persons)

for(let [key,value] of persons){
    console.log(key,value)
}

const person1 = {
    id : 1,
    firstName : 'harshit',
}
const person2 = {
    id : 2,
    firstName : 'harsh'
}
const userinfo = new Map()
userinfo.set(person1,{age : 8, gender : 'male'})
userinfo.set(person2,{age : 9 ,gender : 'male'})
console.log(userinfo)

// person1 get only id  
console.log(person1.id)
console.log(userinfo.get(person1).gender)

//  clone using object.assign  #########################################################
// memory

const obj1 = {
    key1 : 'value1', 
    key2 : 'value2'
}

// const obj2 = obj1

//  obj2 ma pan element add thayo sathe obj1 ma pan add thayo
const obj2 = Object.assign({}, obj1)
obj1.key3 = 'value3'
console.log(obj1)
console.log(obj2)

// optional chaining 
const user = {
    firstName 
}