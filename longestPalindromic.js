var longestPalindrome = function (s) {

    let longest = 0;
    let keys = {};

    for (const char of s) {
        keys[char] = (keys[char] || 0) + 1;

        //if the character count is even, add 2 to longest palindrome length
        if (keys[char] % 2 === 0) {
            longest += 2;
        }
    }
    // If s.length is greater than longest then we know that we can add a unique char in the middle of the palindrome
    return s.longest > longest ? longest + 1 : longest;
}


const s = "abccccdd";
console.log("Length of Longest Palindromic Subsequence:", longestPalindrome(s)); 