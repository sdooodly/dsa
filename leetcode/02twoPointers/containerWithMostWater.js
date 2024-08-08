/**
 * https://leetcode.com/problems/container-with-most-water/
 * Two pointers, Time O(N) | Space(1)
 * @param {number[]} height
 * @return {number}
 */
const maxArea = height => {
    let [left, right, max] = [0, height.length-1, 0]
    while(left<right){
        let containerWidth = right - left
        let area
        if(height[left]<height[right]){
            containerHeight=height[left]
            left++
        }else{
            containerHeight=height[right]
            right--
        }
        area=containerWidth*containerHeight
        if(area>max){
            max=area
        }
    }
    return max
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
