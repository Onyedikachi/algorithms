/**
 * Given an array nums and an integer m, split it into m contiguous subarrays so that the 
 * largest subarray sum is as small as possible. Return that minimized largest sum.
 * [7, 2, 5, 10, 8], m = 2 → 18 (split into [7,2,5] and [10,8])
 */

function feasible(target, m, nums){
    let splitCount = 0, subSum = 0;

    let i = 0;

    while (i < nums.length){
        const number = nums[i];
        if (subSum+number > target){
            splitCount+=1
            subSum = number
        }else{
            subSum+=number;
        }

        i++;
    }
    splitCount+=1;
    return splitCount <= m;
}
function  minimizedLargestSubarraySum(nums, m){
    let lo = -Infinity; let hi = 0;

    for (let i =0; i < nums.length; i++){
        lo = Math.max(lo, nums[i]);
        hi+=nums[i];
    }

    while(lo < hi){
        let mid = Math.floor((lo+hi)/2);

        if (feasible(mid,m,nums)){
            hi=mid;
        }else{
            lo = mid+1;
        }
    }

    return lo;
}

console.log(minimizedLargestSubarraySum([7, 2, 5, 10, 8], 2))