/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // new obj
    let obj = {}
    // check if equal length => return false
    let count = 0;
    const arr = [...s];
    arr.forEach((item)=>{
        if(obj[item])
            ++obj[item];
        else
            obj[item]=1;
        
    })
console.log(obj)
//just duplicate
count = 0
let obj02 = {}
const arr02 = [...t];
arr02.forEach((item)=>{
    if(obj02[item])
        ++obj02[item];
    else
        obj02[item]=1;
    })
console.log(obj02)

let keys = Object.keys(obj);


for (let i = 0; i < keys.length; i++) {
  const key = keys[i];

  if (obj[key] !== obj02[key]) {
    return false; 
  }
}

keys = Object.keys(obj02);


for (let i = 0; i < keys.length; i++) {
  const key = keys[i];

  if (obj[key] !== obj02[key]) {
    return false; 
  }
}

return true;

};

console.log(isAnagram('hat', 'tah'))