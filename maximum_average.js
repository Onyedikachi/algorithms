/**
 * Given an array of integers and an integer k, find the maximum average of any 
 * contiguous subarray of length k. [1, 12, -5, -6, 50, 3], k = 4 → 12.75
 * 
 */

function maximumAverage(nums, k){
    let left = 0;

    let average = -Infinity;

    let sum = 0;

    for (let right =0; right < nums.length; right++){
        sum += nums[right];

        if(right - left + 1 == k){
            average = Math.max(average, sum/k);
            sum -= nums[left];
            left++;
        }
    }

    return average;
}

console.log(maximumAverage([1, 12, -5, -6, 50, 3], 4))