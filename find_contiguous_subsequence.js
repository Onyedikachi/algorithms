/**
 * Given strings s and t, return whether s is a subsequence of t 
 * (all of s's characters appear in t in the same relative order, not necessarily contiguous).
 * s = "abc", t = "ahbgdc" → true; s = "axc", t = "ahbgdc" → false
 */

// method 2
function findSubsequenceM2(t,s){
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;   // consumed all of s
}

// method 1 brueforcelike
function findSubsequence(t,s){
    let isSubsequence = true;

    let parallelPointerB = 0

    for (let parallelPointerA =0; parallelPointerA < s.length; parallelPointerA++){
        let charA = s[parallelPointerA];
        let charB = t[parallelPointerB];

        while(s[parallelPointerA] != t[parallelPointerB] && parallelPointerB < t.length){
            parallelPointerB++;
        }

        if(s[parallelPointerA] != t[parallelPointerB]){
            return false
        }

        parallelPointerB++

    }

    return isSubsequence;
}

console.log(findSubsequence("ahbgdc", "abc"))
console.log(findSubsequence("ahbgdc", "axc"))
console.log(findSubsequence("ahbgdc", "aa") )
console.log('-----------------------')

console.log(findSubsequenceM2("ahbgdc", "abc"))
console.log(findSubsequenceM2("ahbgdc", "axc"))
console.log(findSubsequenceM2("ahbgdc", "aa") )
