// creates a node that has an element and a pointer :
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
// link list class :
class LinkedList {
  // tracks the size of list :
  length = 0;
  constructor(head = null) {
    this.head = head;
  }
  // add element to end of list :
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value);
    }
    this.length++;
  }
  // add element to start of list :
  prepend(value) {
    this.head = new Node(value, this.head);
    this.length++;
  }
  // return size of list :
  size() {
    return `list size : ${this.length}`;
  }
  // return first element in list :
  headFunc() {
    return this.head;
  }
  // return last element in list :
  tailFunc() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (currentNode.next == null) return currentNode;
    }
    return currentNode;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.prepend("second");
list.prepend("first");

console.log("list: ", list);
// console.log(list.size());
// console.log(list.headFunc());
// console.log(list.tailFunc());
