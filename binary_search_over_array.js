/**
 * 
 * weights = [1,2,3,4,5,6,7,8,9,10] must ship in order within D days. 
 * Each day a ship carries some prefix of the remaining weights without exceeding 
 * its capacity C. Find the minimum capacity C that gets everything shipped within D days.
 * 
 */

function feasible(weights, C,D){    
    let load = 0;
    let dayCounter = 1;

    for (let currentIdx = 0; currentIdx < weights.length; currentIdx++){
        if (load + weights[currentIdx] <= C ){
            load+=weights[currentIdx]
        }else{
            dayCounter++;
            load = weights[currentIdx];
        }
    }

    return dayCounter <= D
}

function binarySearchOverArray(weights, D){
    let lo = 0;
    let hi = 0;

    for (const w of weights){
        lo = w > lo ? w : lo;
        hi+=w;
    }
    while (lo < hi){
        let mid = Math.floor((hi+lo)/2);

        console.log('hi: ', hi, ' lo: ', lo, ' mid: ', mid);

        if (feasible(weights, mid, D)){
            hi = mid;
        }else{
            lo = mid+1;
        }
    
    }
    return lo;
}
// function binarySearchOverArray(weights, D){
//     let lo = 0;
//     let hi = 0;

//     for (const w of weights){
//         lo = w > lo ? w : lo;
//         hi = hi+=w;
//     }
//     while (lo < hi){
//         let mid = Math.floor((hi+lo)/2);

//         let load = 0;
//         let dayCounter = 1;

//         for (let currentIdx = 0; currentIdx < weights.length; currentIdx++){
//             if (load + weights[currentIdx] <= mid ){
//                 load+=weights[currentIdx]
//             }else{
//                 dayCounter++;
//                 load = weights[currentIdx];
//             }
//         }

//         console.log('hi: ', hi, ' lo: ', lo, ' mid: ', mid, ' dayCounter: ', dayCounter);

//         if (dayCounter > D){
//             lo = mid+1;
//         }else{
//             hi = mid;
//         }
    
//     }
//     return lo;
// }

console.log(binarySearchOverArray([1,2,3,4,5,6,7,8,9,10], 5))
console.log(binarySearchOverArray([1,2,3,4,5,6,7,8,9,10], 4))
console.log(binarySearchOverArray([1,2,3,4,5,6,7,8,9,10], 2))
console.log(binarySearchOverArray([1,2,3,4,5,6,7,8,9,10], 10))


        
// C=15
// 1,2,3,4,5
// 6,7
// 8
// 9
// 10