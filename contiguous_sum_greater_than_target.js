/**
 * Positive integers, shortest contiguous subarray with sum ≥ target.
 * [2, 3, 1, 2, 4, 3], target 7 → 2
 * 
 * 
 */

function contiguousSumGreaterThanTarget(nums, target){
    let windowSum = 0, left=0, right=0, minLength;



    for (right; right < nums.length; right++){
        windowSum+=nums[right];

        while(windowSum >= target){
            minLength = Math.min(minLength ?? nums.length, right-left+1)
            windowSum-=nums[left]
            left++
        }

        // console.log(windowSum, ' windowSum', minLength, ': minLength')
    }

    return minLength === undefined? 0 : minLength;

}
console.log(contiguousSumGreaterThanTarget([2, 3, 1, 2, 4, 3], 7))
console.log(contiguousSumGreaterThanTarget([1, 1, 1], 7))
