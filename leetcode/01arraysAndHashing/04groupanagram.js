// https://leetcode.com/problems/group-anagrams/
//  time O(n * (k + k log k + k + 1 + 1))= O(n * k log k)
// space = O(n^2) + O(k)
//strings
// sorted:[others]
// return others
const groupAnagrams = strs => {
  const anagramObj = {};
  for(const str of strs){
    const sortedStr = str.split('').sort().join();
    if(anagramObj[sortedStr]) anagramObj[sortedStr].push(str)
    else anagramObj[sortedStr] = [str]
  }
  return Object.values(anagramObj)
}
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

