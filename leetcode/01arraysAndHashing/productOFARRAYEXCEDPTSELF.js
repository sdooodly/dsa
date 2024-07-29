// https://leetcode.com/problems/product-of-array-except-self/
// Time complexity: O(n+n)=O(2n)=O(n)
// Space complexity: O(1) O.o

const productExceptSelf = (nums) => {
  const result = Array(nums.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= leftProduct;
    leftProduct *= nums[i];
  }
  let rightProduct = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }
  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
