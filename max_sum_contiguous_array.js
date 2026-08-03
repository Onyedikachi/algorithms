/**
 * 
 * Given an array of integers nums and an integer k, find the maximum sum of any contiguous subarray of size k.
 * Example: nums = [2, 1, 5, 1, 3, 2], k = 3 → answer is 9 (the window [5, 1, 3]).
 * 
 * Utilising the sliding window the time complexity O(n), space complexity is O(k)
 */

function maxSum (nums, k){
    let maxSum;
    let arrLength = nums.length;

    if (k > arrLength)
        return -1

    let oldSum = 0;

    for (let i=0; i < k; i++){
        oldSum+=nums[i]
    }

    maxSum = oldSum;

    for (let j=1; j < arrLength + 1 - k; j++){
        let newSum = oldSum + nums[j+k-1] - nums[j-1]

        if (newSum > maxSum)
            maxSum = newSum;

        oldSum = newSum;
    }

    return maxSum;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3));

