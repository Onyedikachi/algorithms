/**
 * 
 * Here's P2 again so you don't have to scroll:
 * Two sorted arrays, return their intersection, each value once.
 * a = [1, 2, 2, 4, 7], b = [2, 2, 5, 7, 9] → [2, 7]
 * Before code, three things:
 * The three comparison cases. When a[i] < b[j], which pointer moves? When a[i] > b[j]? When they're equal, 
 * what do you do and which pointer(s) move?
 * The dedup trick, no Set. The output should list 2 once even though both arrays contain it twice. 
 * Since the arrays are sorted, duplicates sit next to each other. So when you're about to add a 
 * value to the result, what's the cheapest thing you could check to know it's not a repeat? 
 * (Look at what you last pushed.)
 * 
 * 
 * The principle: dedup against the output, not the input. The output is the only place a duplicate actually 
 * matters, and checking "same as last pushed" is the cheap trick sorted data hands you — because equal values
 *  are guaranteed adjacent in the result too
 * 
 */

function intersectionOfArrays(a,b){
    let pointerA = 0, pointerB = 0;

    const result = [];

    while(pointerA < a.length && pointerB < b.length){
        if (a[pointerA] > b[pointerB]){
            pointerB+=1;
        }else if (a[pointerA] < b[pointerB]){
            pointerA+=1;
        }else{

            if (result.length == 0 || result[result.length-1] != a[pointerA]){
                result.push(a[pointerA]);
            }
            pointerA+=1
            pointerB+=1
        }

        console.log(pointerA, ': pointerA: ', pointerB, ': pointer B')
    }

    return result
}
 // if(a[pointerA] == a[pointerA -1 ]){
            //     pointerA+=1
            //     continue;
            // }
            // result.push(a[pointerA])
            // pointerA+=1
            
console.log(intersectionOfArrays([1, 2, 2, 4, 7], [2, 2, 5, 7, 9]))
console.log(intersectionOfArrays([1, 2, 2, 4, 5, 7, 9], [2, 2, 5, 7, 9]))
console.log(intersectionOfArrays([1, 2, 2, 4, 7], [2, 2, 4, 4, 5, 5, 5, 7, 9]))
console.log(intersectionOfArrays([2, 2], [2]))


