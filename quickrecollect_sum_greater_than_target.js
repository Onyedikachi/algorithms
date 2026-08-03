/**
 * Positive integers, shortest contiguous subarray with sum ≥ target.
 * [2, 3, 1, 2, 4, 3], target 7 → 2
 * 
 * 
 * Q1 — the flip. You said we shrink-while-valid, then restated the rule. The actual answer is about what you're 
 * optimizing:Longest-substring problems: you want the biggest valid window. So you keep the window valid at all 
 * times and grow greedily; you only shrink when a new element makes it invalid, to restore validity. 
 * Shrink-while-invalid. 
 * This problem: you want the smallest valid window. So the moment the window becomes valid, 
 * that's not the answer yet — a tighter window might still clear the bar. You shrink while valid, recording 
 * each width, until one more shrink would break it. Shrink-while-valid. The flip is just: maximizing → hold valid, 
 * shrink to restore; minimizing → shrink to tighten while still valid. That's the sentence to journal.
 * 
 * Q2 — your safety argument is actually backwards. You wrote "the leftmost item already satisfies the condition, 
 * so it's dead." That's not it. Here's the real argument, and it's the monotonicity point: 
 * When the window [left..right] is valid (sum ≥ target), you record its width. Now — is there any shorter valid 
 * window that also ends at or before right and starts at left? No: dropping nums[left] is the only way to get shorter 
 * while keeping right fixed. So you drop it and check again. Once the window goes invalid, you know no window 
 * ending at right can be shorter and valid, so you're done with this right and extend it. You never reconsider 
 * left positions because, with all-positive numbers, a window that's already too small only gets smaller as you 
 * shrink further — it can never become valid again. That last clause is the monotonicity guarantee, and it's 
 * exactly what negatives would destroy.
 * 
 */

function continguousArrayGreaterThanTarget(nums, target){
    let windowSum = 0, minimumLength = Infinity, right = 0, left = 0;

    for (right; right < nums.length; right++){
        windowSum+= nums[right];

        while (windowSum >= target){
            minimumLength = Math.min(minimumLength, right - left + 1);
            windowSum-=nums[left];
            left+=1;
        }

        // console.log('right: ', right, ' left: ', left, ' minimumLength: ', minimumLength, ' windowSum: ', windowSum)
    }

    return minimumLength == Infinity ? minimumLength : 0;
} 

console.log(continguousArrayGreaterThanTarget([2, 2], 7))
console.log(continguousArrayGreaterThanTarget([2, 3, 1, 2, 4, 3], 7))
