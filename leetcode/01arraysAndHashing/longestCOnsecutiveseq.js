// https://leetcode.com/problems/longest-consecutive-sequence/
// O(n) time complexity.

const longestConsecutive = (nums) => {
  const numSet = new Set(nums);
  let longestStreak = 0;
  for (const num of nums) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }
  return longestStreak;
};
nums = [0, 3, 4, 5, 7, 6, 11];
console.log(longestConsecutive(nums));
