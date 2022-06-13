//  iterables
//  jispe hum for of loop laga sakein
// string , array are iterable
//  objects not iterables 

// array like object
//  jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string

// strings
const firstname = "harshit"
for(let char of firstname){
    console.log(char)
}

for(let char in firstname){
    console.log(char)
}

// arrary

const iteams = ['iteam1','iteam2','iteam3','iteam4']
for(let el of iteams){
    console.log(el)
}

for(let el in iteams){
    console.log(el)
}
//   note :   object not iterables
// object
// const users = {'key1' : 'value1' , 'key2' : 'value2' }
// for(let item of users){
//     console.log(item)
// }
 
console.log('<<<<<<<<<',firstname.length,'>>>>>>>>')