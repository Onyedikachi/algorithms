/**
 * Given an array heights where each element is the height of a vertical line at that index, pick two lines that 
 * together with the x-axis form a container holding the most water. Return that maximum area. 
 * (Area = distance between the two lines × the height of the shorter one.)
 * heights = [1, 8, 6, 2, 5, 4, 8, 3, 7] → 49 (lines at index 1 and 8: width 7 × height 7)
 * 
 * 
 */

function maximumArea(heights){
    let pointerA =0, pointerB = heights.length - 1, maxArea = 0;

    while (pointerA < pointerB){
        const hA = heights[pointerA];
        const hB = heights[pointerB];

        const area = Math.min(hA, hB) * (pointerB - pointerA);

        console.log('area: ', area);
        if (area > maxArea){
            maxArea = area;
        }

        if(hA <= hB){
            pointerA+=1;
        }else{
            pointerB-=1;
        }

        console.log('maxArea: ', maxArea, ' pointerA: ', pointerA, ' : pointerB', pointerB);
    }

    return maxArea
}

console.log(maximumArea([1, 8, 6, 2, 5, 4, 8, 3, 7] ))