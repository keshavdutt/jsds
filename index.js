function maxSubstringLength(s) {
  let maxLen = 0;
  let left = 0;
  let right = 0;
  let charCount = new Map();

  while (right < s.length) {
      const char = s[right];
      charCount.set(char, (charCount.get(char) || 0) + 1);

      while (charCount.size > 2) {
          const leftChar = s[left];
          charCount.set(leftChar, charCount.get(leftChar) - 1);
          if (charCount.get(leftChar) === 0) {
              charCount.delete(leftChar);
          }
          left++;
      }

      maxLen = Math.max(maxLen, right - left + 1);
      right++;
  }

  return maxLen;
}

// Example usage:
const s = "bcbbbcba";
console.log(maxSubstringLength(s)); // Output: 4
