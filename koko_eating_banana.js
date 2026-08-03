/**
 * Koko eating bananas. There are piles of bananas and Koko has H hours before 
 * the guards return. She picks an eating speed k (bananas per hour). 
 * Each hour she chooses one pile and eats up to k bananas from it — if the 
 * pile has fewer than k left, she finishes it and eats no more that hour.
 * Find the minimum k such that she finishes all the bananas within H hours.
 * 
 * piles = [3, 6, 7, 11], H = 8 → 4
 * piles = [30, 11, 23, 4, 20], H = 5 → 30
 * piles = [30, 11, 23, 4, 20], H = 6 → 23
 * 
 * Complexity: O(n · log(max(piles))).
 */

function feasible(piles, bananaSize, maxHour){
    let hour = 0;
    for (let i=0; i < piles.length; i++){
        let pileSize = piles[i];
        hour+= Math.ceil(pileSize/bananaSize);
    }

    console.log(hour <= maxHour, ' hour: ', hour, ' maxHour: ', maxHour, ' bananaSize: ', bananaSize)

    return hour <= maxHour
}

function minimumBananaPile(piles, maxHour){
    let lo = 1, hi = 0; // lo is the smallest conceivable, hi is the highest in this case

    for (const pile of piles){
        hi = pile > hi ? pile : hi;
    }

    while (lo < hi){
        let mid = Math.floor((lo + hi)/2)

        if(feasible(piles, mid, maxHour)){
            hi = mid
        }else{
            lo = mid + 1
        }
    }

    return lo;
}

console.log(minimumBananaPile([3, 6, 7, 11], 8))
console.log(minimumBananaPile([30, 11, 23, 4, 20], 5))
console.log(minimumBananaPile([30, 11, 23, 4, 20], 6))
