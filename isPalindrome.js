var isPalindrome = function (x) {
    var str = x.toString();
    var len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if(str[i] !==str[len-i-1]){
            return false;
        }
    }
    return true;
}

// example to test 
console.log(isPalindrome(121));  // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10));   // Output: false
console.log(isPalindrome(101));  // Output: true
