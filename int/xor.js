// / xor -> a != b then true, a b booleans

// only use -> ? :

// a?b?false:
//input = a, b -> booleans
// function to return true if a=! b
// only use ? amd :

// const check = (a,b)=> a?(b?false:true):b?true:false
const check = (a,b) => a?(b?false:true):b

console.log(check(true,false))
console.log(check(false,false))
console.log(check(true,true))
console.log(check(false, true))

// a= true and b = false
// a= false and b =true

// if(a){
//     if(b){
//         return false
//     }
//     return true
// }
// else if(b){
//     return true
// }
// else 
// return false



// return a?(b?false:true):b?true:false

a?(b?true:false):b?true:false

if(a){

}