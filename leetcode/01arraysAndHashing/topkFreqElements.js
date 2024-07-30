// https://leetcode.com/problems/top-k-frequent-elements/
const topKFrequent = (nums, k) => {
  const resultMap = new Map();
  for (let num of nums) resultMap.set(num, (resultMap.get(num) || 0) + 1);
  const freqArray = Array.from(resultMap.entries());
  freqArray.sort((a, b) => b[1] - a[1]);
  return freqArray.slice(0, k).map((pair) => pair[0]);
};

egArr = [1, 1, 1, 2, 2, 2, 2, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4];
console.log(topKFrequent(egArr, 2));
