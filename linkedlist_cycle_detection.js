/**
 * 
 * Linked list cycle detection. Given the head of a singly linked list, 
 * determine whether it contains a cycle — i.e. some node's next eventually 
 * points back to an earlier node.
 * 
 * O(1) space. A Set of visited nodes solves it trivially in O(n) space; that solution is banned.
 * 
 */

const n4 = { val: 4, next: null };
const n3 = { val: 3, next: n4 };
const n2 = { val: 2, next: n3 };
const n1 = { val: 1, next: n2 };

const m5 = { val: 5, next: null };
const m4 = { val: 4, next: m5 };
const m3 = { val: 3, next: m4 };
const m2 = { val: 2, next: m3 };
const m1 = { val: 1, next: m2 };
m5.next = m2;

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        // one step
        fast = fast.next.next;
        
        if (slow === fast) return true;
    }

    return false;   // fast ran off the end → no cycle
}


console.log(hasCycle(n1))
console.log(hasCycle(m1))


