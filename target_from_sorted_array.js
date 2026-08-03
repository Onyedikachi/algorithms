/**
 * Given a sorted array nums and a target, return the indices of the two numbers that sum to the target. 
 * Assume exactly one solution exists.[1, 3, 5, 8, 11], target 13 → [2, 3]
 * 
 */

function targetFromSorted(nums, target){
    let left=0, right = nums.length -1;

    while (left < right){
        if (nums[left]+nums[right]=== target){
            return [left,right];
        }else if(nums[left]+nums[right] > target){
            right-=1
        }
        else{
            left+=1
        }

        console.log('left:', left, ' right: ', right)
    }

    return [];
}

console.log(targetFromSorted([1, 3, 5, 8, 11], 13))
console.log(targetFromSorted([1, 3, 5, 8, 11], 12))
console.log(targetFromSorted([1, 3, 5, 8, 11], 100))