/**
 * Given a sorted array nums and a target, return the indices of the two numbers that sum to the target. 
 * Assume exactly one solution exists.[1, 3, 5, 8, 11], target 13 → [2, 3]
 * 
 */

function targetIndices(nums, target){
    let pointerA = 0, pointerB = nums.length -1, maxSum = 0;

    while (pointerA < pointerB){
        maxSum = nums[pointerA] + nums[pointerB];

        if(maxSum == target){
            return [pointerA, pointerB]
        }else if (maxSum < target){
            pointerA+=1;
        }else{
            pointerB-=1;
        }
    }

    return [];
}

console.log(targetIndices([1, 3, 5, 8, 11], 13));