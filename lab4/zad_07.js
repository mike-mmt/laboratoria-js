'use strict';

function isPalindrome(numbers) {
    let palindrome = true;
    numbers.forEach((number,index) => {
        if (number !== numbers[numbers.length-1-index]) palindrome = false;
    });
    return palindrome;
}

console.log(isPalindrome([3,7,6,5,5,6,7,3]));