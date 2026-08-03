/**
 *
 *  Given a string s and an integer k, find the length of the longest substring containing at most k distinct characters.
 * s = "eceba", k = 2 → 3 ("ece")
 * s = "aa", k = 1 → 2
 * s = "abcadcacacaca", k = 3 → 11 ("cadcacacaca")
 *
 * time complexity is O(n), space complexity is O(k)
 */

function longestKSubstring(s, k) {
  let maxLength = 0;
  let right = 0;
  let left = 0;

  let window = new Map();

  for (right = 0; right < s.length; right++) {
    let char = s[right];

    window.set(char, (window.get(char) || 0) + 1);

    while (window.size > k) {
      let leftChar = s[left];

      const count = window.get(leftChar);
      if (count === 1) window.delete(leftChar);
      else window.set(leftChar, count - 1);

      left += 1;
    }

    maxLength = Math.max(maxLength, right - left + 1);

    // console.log('left:',left, 'char:', char, '---', window, '---', maxLength)
  }

  return maxLength;
}

console.log(longestKSubstring("eceba", 2));
console.log(longestKSubstring("aa", 1));
console.log(longestKSubstring("abcadcacacaca", 3));
