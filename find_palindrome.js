/**
 * Given a string, determine whether it's a palindrome, considering only 
 * alphanumeric characters and ignoring case.
 * "A man, a plan, a canal: Panama" → true; "race a car" → false
 */

function findPalindrome(sentence){
    let isPalindrome = true;
    let left = 0; 
    let right = sentence.length - 1;
    let alphanumeric= "abcdefghijklmnopqrstuvwxyz0123456789";

    while(left < right){

        while(left < right && !alphanumeric.includes(sentence[left].toLowerCase())){
            left++;
        }
        while(left < right && !alphanumeric.includes(sentence[right].toLowerCase())){
            right--;
        }
        console.log(right, ' right ', 'char right;', sentence[right], left, ' left ', 'char left ', sentence[left])
        if (sentence[right].toLowerCase() != sentence[left].toLowerCase())
            return false;

        left++
        right--
    }



    return isPalindrome;
}

console.log(findPalindrome("A man, a plan, a canal: Panama"))
console.log(findPalindrome("race a car"))
console.log(findPalindrome(".,"))
