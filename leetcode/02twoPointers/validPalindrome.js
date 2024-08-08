/**
 * 2 Pointer | Midde Convergence | No RegEx | No Copying
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    const isAlphaNumeric = c => (c.toLowerCase() >= 'a' && c.toLowerCase() <= 'z') || c >= '0' && c <= '9'
  
    let left = 0;
    let right = s.length - 1;
    let skipLeft, skipRight, endsEqual = false;
    
    while (left < right) {
      skipLeft = !isAlphaNumeric(s.charAt(left))
      if (skipLeft) { left++; continue; }
  
      skipRight = !isAlphaNumeric(s.charAt(right))
      if (skipRight) { right--; continue; }
  
      endsEqual = s.charAt(left).toLowerCase() === s.charAt(right).toLowerCase()
      if (!endsEqual) return false
  
      left++
      right--
    }
    return true
  };

  console.log(isPalindrome('muma'))
  console.log(isPalindrome('mumaamum'))
  console.log(isPalindrome('mumamum'))
  console.log(isPalindrome('1221'))
  console.log(isPalindrome('12hah21'))
  console.log(isPalindrome(''))
  console.log(isPalindrome('@mum'))
  
  