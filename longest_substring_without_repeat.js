/**
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * Example: s = "abcabcbb" → 3 (the substring "abc"). s = "bbbbb" → 1. s = "pwwkew" → 3 ("wke", not "pwke" — substrings must be contiguous).
 * 
 * Here the window width itself is the answer: we are searching for the wildest 
 * valid window
 * That's the loop: grow right always; when the incoming char is already in the 
 * window, shrink from left — removing each departing char from the set — 
 * until it isn't.
 * 
 * The inner loop doesn't run n times per outer iteration. left never resets — 
 * it only advances, and it can advance at most n times across the entire 
 * execution. So the inner loop's total work over the whole run is bounded by n, 
 * not n per outer step. Total pointer movement is at most 2n → O(n).
 * 
 */
// limitation of this the foundWindow grows fast 
// function longestSubstring(s){
//     if (s.length < 1) return -1;

//     let foundWindow = s[0];
//     let maxSubstringLength = 1;

//     let j=1;
//     while (j < s.length){
//         let char =  s[j]

//         console.log(foundWindow, '---', char, '---', maxSubstringLength)

//         if(foundWindow.includes(char)){
//             foundWindow = foundWindow.slice(1);
//         }else{
//             foundWindow+=char;
//             j+=1;
//         }
        
//         if (foundWindow.length > maxSubstringLength){
//             maxSubstringLength = foundWindow.length
//         }
            
//     }

//     return maxSubstringLength
// }

function longestSubstring(s) {
    if (s.length === 0) return 0;

    const seen = new Set();
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        // shrink from the left until s[right] can safely enter
        while (seen.has(s[right])) {
            seen.delete(s[left] );   // which char leaves?
            left+=1;                  // move the left boundary
        }

        seen.add(s[right]); //pw
        maxLen = Math.max(maxLen, right-left+1 );  // window width from two indices
    }

    return maxLen;
}

console.log(longestSubstring("abcabcbb"))
console.log(longestSubstring("pwwkew"))
console.log(longestSubstring("bbbbb"))
console.log(longestSubstring("dvdf"))
