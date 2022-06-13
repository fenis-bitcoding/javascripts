// objects reference type
// arrays are good but not sufficient
// for real world Data 
// objects store key value pairs 
// objects don't have index 

// how to create objects

const person = {
    'name' : 'fenis',
    'surname' : 'matariya',
    'hobbies' : ['cricket','watch movies'],
    'person hobbies' : ['cricket','watch movies']
}
console.log(person)

// how to access data from object 
console.log(person['name'])
console.log(person.name)
console.log(person.surname)
console.log(person.hobbies)
// console.log(person.person hobbies)  not valied
console.log(person['person hobbies'])



// how to add key value pair to objects
person['gender'] = 'male'
console.log(person)
person.gender = 'male'

console.log(person)


// differnce between dot and bracket notaion 
const key = 'email'
person.key = 'fvmatariya@gmail.com'
console.log(person)
person[key] = 'fvmatariya@gmail.com'
console.log(person)


// for in loop
// objects.key 
const human = {
    'name' : 'fenis',
    'surname' : 'matariya',
    'hobbies' : ['cricket','watch movies'],
    // 'person hobbies' : ['cricket','watch movies']
}

// get only key 
for(let key in  human){
    console.log(key)
}

// get only value 
for(let key in human){
    console.log(human[key])
}

// key and value pair 
for(let key in human){
    console.log(key,':',human[key])
}

// computed properties 
const key1 = 'objkey1'
const key2 = 'objkey2'

const value1 = 'objvalue1'
const value2 = 'objvalue2'
const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj)

// 2nd method 

const newobj = {}
newobj[key1] = value1;
newobj[key2] = value2

console.log(newobj)

// spread operator 

const array7 = [1,2,3]
const array8 = [4,5,6]
const newarray = [...array7,...array8]

console.log(newarray)

// spread operator in objects

const obj1 = {
    key3 : 'value3',
    key4 : 'value4',
    key3 : 'value233',
}
console.log(obj1)
const obj2 = {
    key3 : 'valueunique',
    key5 : 'value4',
    // key3 : 'value233',
}
console.log(obj2)

const newobj1 = {...'abc'}
console.log(newobj1)

// objects destructuring 

const band = {
    bandname : 'led zepplin',
    famoussong : 'stairway to heaven'
}
// const bandname = band.bandname
// const famoussong = band.famoussong
// console.log(bandname , "  ", famoussong)

let {bandname , famoussong} = band
console.log(bandname)

const users = [
    {userid : 1 , firstname : 'fenis' , gender : 'male'},
    {userid : 2 , firstname : 'smit' , gender : 'male'},
    {userid : 3 , firstname : 'pradip' , gender : 'male'},
]

console.log(users)

for(let user of users){
    console.log(user)
}

for(let user of users){
    console.log(user.userid)
}

const [user1,user2,user3]= users
console.log(user1)

const [{firstname}, , {gender}]= users
console.log(firstname)

// change variable name 

const [{firstname : user1firstname}, , {gender : user1gender}]= users
console.log(user1firstname)