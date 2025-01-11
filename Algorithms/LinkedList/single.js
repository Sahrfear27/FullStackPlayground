/**
 * A single linked list is a data structure consisting of a sequence of node. Each node consist of
 * 1.   element,
 * 2.   link to the next
 * */

// Create a node
class Node {
  constructor(data) {
    this.data = data; // Element stored in the node
    this.next = null; //Pointer to the next node
  }
}

// Create a single linkedlist

class SinglyLinkedinList {
  constructor() {
    this.head = null; //The first node in the list
  }

  //   Add to the end of the list
  append(data) {
    const newData = new Node(data);

    // If the head is empty, set it to the new node
    if (this.head === null) {
      this.head = newData;
    } else {
      // Traverse to the end of the list and add the new node
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newData;
    }
    return "Added Successifully";
  }

  remove(data) {
    if (this.head == null) {
      return "List is empty";
    }

    // Check if the head need to be remove
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    // Traverse the list to find the node to be removed
    let current = this.head;
    let previous = null;
    while (current !== null && current.data !== data) {
      previous = current;
      current = current.next;
    }
    if (current == null) {
      return "Node not Found";
    }
    previous.next = current.next;
    return "Deleted";
  }
  printList() {
    if (this.head === null) {
      return "Empty List";
    }
    let current = this.head;
    let dataList = "";
    while (current !== null) {
      dataList += current.data + " -> ";
      current = current.next;
    }
    // Indicate to the end of the list
    dataList += "null";
    return dataList;
  }
}

let list = new SinglyLinkedinList();
console.log(list.append(10));
console.log(list.append(20));
console.log(list.append(30));
console.log(list.append(40));
console.log(list.printList());

console.log(list.remove(20));
console.log(list.printList()); // Output: 10 -> 30 -> null
