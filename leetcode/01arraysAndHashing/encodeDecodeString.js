// https://neetcode.io/problems/string-encode-and-decode
// O(n)
// O(n)
const encode = (strs) => strs.join('\0')
const decode = s => s.split('\0')
const eg = ["we","say",":","yes"]
console.log(encode(eg))
console.log(decode(encode(eg)))
console.log(eg == decode(encode(eg))) // false ???
console.log(eg === decode(encode(eg))) // false 




