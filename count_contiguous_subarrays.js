/**
 * Given an array of positive integers and an integer k, 
 * count how many contiguous subarrays 
 * have a product strictly less than k.[10, 5, 2, 6], k = 100 → 8
 * 
 * product = 1, left = 0, count = 0
 * for right in 0..n-1:
    product *= nums[right]
    while (product >= k && left <= right):   // invalid → shrink
        product /= nums[left]; left++
    count += right - left + 1

 */
// using the original fixed window concept
// the window increase by multiplication and shrinks by division
function countProductOfContiguousArrayLessThanKFixedWindow(nums,  k){
    let product = 1;
    let left = 0;
    let count = 0;

    for (let right = 0; right < nums.length; right++){
        product *= nums[right];

        while(product >= k && left <= right){
            product /= nums[left];
            left++;
        }

        count += right - left + 1;

    }

    return count;
}

// The bruteforce solution
function countProductOfContiguousArrayLessThanK(nums, k){
    let right;
    let left = 0;

    let numLength = nums.length;
    let result = 0;

    for (left; left < numLength; left++){
        right = left;
        let initialProduct = 1;

        while(initialProduct * nums[right] < k && right < numLength){
            initialProduct*=nums[right];
            result+=1;
            right++;
        }
    }

    return result;
}

console.log(countProductOfContiguousArrayLessThanKFixedWindow([10, 5, 2, 6], 100))
console.log(countProductOfContiguousArrayLessThanK([10, 5, 2, 6], 100))