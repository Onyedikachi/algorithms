/**
 * Given two sorted arrays a and b, merge them into a single sorted array.
 * a = [1, 4, 7], b = [2, 3, 9] → [1, 2, 3, 4, 7, 9]
 * 
 * 
 */

function mergeArrays(a, b){

    let pointerA = 0, pointerB = 0;

    const result = []

    while (pointerA < a.length && pointerB < b.length){
        
        if(a[pointerA] <= b[pointerB]){
            result.push(a[pointerA]);
            pointerA+=1;
        }else{
            result.push(b[pointerB])
            pointerB+=1
        }

        // console.log(`pointerA:  ${pointerA}  pointerB:  ${pointerB}  result:  ${result.toString()}`)
    }

    for (pointerA; pointerA < a.length; pointerA++)
        result.push(a[pointerA]);

    for (pointerB; pointerB < b.length; pointerB++)
        result.push(b[pointerB]);

    return result;
}

console.log(mergeArrays([1, 4, 7],  [2, 3, 9]))
console.log(mergeArrays([1, 4, 7, 10, 12],  [2, 3, 9, 11]))
console.log(mergeArrays([1,4, 7, 8,8, 10, 12],  [2, 3,3, 9, 11]))
console.log(mergeArrays([1, 2, 3],  [9, 10, 11]))
console.log(mergeArrays([1],  [1]))

