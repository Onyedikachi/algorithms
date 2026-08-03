function longestSubstringWithoutRepeating(str) {
  const window = new Set();

  let right = 0,
    left = 0;

  let maxLength = 0;

  for (right; right < str.length; right++) {
    const char = str[right];

    while (window.has(char)) {
      window.delete(str[left]);
      left += 1;
    }

    window.add(char);

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(longestSubstringWithoutRepeating("abcabcbb"));
console.log(longestSubstringWithoutRepeating("bbbbb"));
console.log(longestSubstringWithoutRepeating("pwwkew"));
