// [1,3,5] target = 6  -> [1,5]

var twoSum = function (nums, target) {
    //loop thru nums
    // sconst flag = true
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        let diff = target - num
        // if ((num + obj[num] == target)) {
        //     return [nums.indexOf(num), nums.indexOf(diff)]
        // }
        // else if (diff + obj[diff] == target) {
        //     return [nums.indexOf(diff), nums.indexOf(num)]
        // }
         
        // else
        // obj[num] = diff;
        console.log(obj[diff])
        if(obj[diff]!== undefined)
            return [obj[diff], i]
        obj[num]=i     
    }
};

console.log(twoSum([2,7,11,15], 9))