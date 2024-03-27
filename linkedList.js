// creates a node that has an element and a pointer :*
class Node {
  static index = 0;
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
    this.index = Node.index++;
  }
}
// link list class :
class LinkedList {
  // tracks the size of list :
  size = 0;
  constructor(head) {
    this.head = head || null;
  }
  // add a node to end of list :
  append(value) {
    if (this.head === null) {
      this.head = new Node(value, null);
    } else {
      let currNode = this.head;
      // travel to the last node :
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = new Node(value, null);
    }
    this.size++;
  }
  // add a node to start of list :
  prepend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  // return size of list :
  getSize() {
    return `list size : ${this.size}`;
  }
  // returns the first node in the list :
  getHead() {
    if (this.head == null) return "no head found!";
    else return this.head;
  }
  // returns the last node in the list :
  getTail() {
    let currNode = this.head;
    // travel to the last node :
    while (currNode !== null) {
      if (currNode.next === null) return currNode;
      currNode = currNode.next;
    }
    return "no tail found!";
  }
  // returns the node at the given index :
  at(index) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.index === index) return currNode;
      currNode = currNode.next;
    }
    return "no node found!";
  }
  // removes the last node from the list :
  pop() {
    let prevNode;
    let currNode = this.head;
    while (currNode.next != null) {
      // stores the node before the last node :
      prevNode = currNode;
      currNode = currNode.next;
    }
    // points prev node to null :
    if (prevNode === undefined) this.head = null;
    else prevNode.next = null;
    this.size--;
  }
}
// creates an instance :
const list = new LinkedList();
// append and prepend some nodes :
list.append("a");
list.append("b");
list.prepend("second");
list.prepend("first");
// linked list methods :
console.log("full list:", list);
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
console.log(list.pop(), "checks list after popping last node:", list);
