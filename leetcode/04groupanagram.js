//https://leetcode.com/problems/group-anagrams/description/
//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const strsSorted = []
    strs.forEach((str)=>{
        // strsSorted[indexOf(Str)]=sortFunction(str)
        strsSorted[indexOf(str)]=str.split('').sort().join('')
        console.log(strsSorted[indexOf(str)])
    }
    )
    for(let i=0, i< strs.length; i++){
        const mainString = strsSorted[i]
        for(let j=0; j<strs.length; j++){
            if(str)
        }
    }
    
};
const sortFunction = (str) => {

}