/**
 * Given the head of a singly linked list, return the middle node. 
 * If there are two middles, return the second. One pass, O(1) space.
 * 1→2→3→4→5 → node 3; 1→2→3→4→5→6 → node 4
 */

function findMiddle(head){
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.val;
}