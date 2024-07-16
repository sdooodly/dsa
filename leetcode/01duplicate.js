/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    let flag = false
    nums.forEach((num) => {
     if(obj[num])
         flag = true  
     else
         obj[num]=true;
      
    })
     return flag
 };

 containsDuplicate([1,2,2])