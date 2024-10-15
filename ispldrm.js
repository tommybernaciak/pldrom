//  check if string is palindrome
// if not, check if string is palindrome after removing one character
// if yes, return true
// if no, return false

const checkPalindrome = (str) => {
  if (typeof str !== "string") {
    throw new Error("Input must be a string");
  }
  return isPalindrome(str);
};

const isPalindrome = (str) => {
  if (str.length === 0 || str.length === 1) {
    return true;
  }

  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindromeHelper(str, left + 1, right) ||
        isPalindromeHelper(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

const isPalindromeHelper = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

console.log(checkPalindrome("a") === true);
console.log(checkPalindrome("") === true);
console.log(checkPalindrome("racecar") === true);
console.log(checkPalindrome("racecars") === true);
console.log(checkPalindrome("racecarss") === false);
console.log(checkPalindrome("ab") === true);
console.log(checkPalindrome("abc") === false);
console.log(checkPalindrome("abca") === true);
console.log(checkPalindrome("abcb") === true);
console.log(checkPalindrome("abcba") === true);
console.log(checkPalindrome("abccba") === true);
console.log(checkPalindrome("abcdeba") === false);
console.log(checkPalindrome("tralalalalart") === true);
console.log(checkPalindrome("tralalalaxlart") === true);
console.log(checkPalindrome("tralalalacblart") === false);
