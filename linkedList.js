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
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(value, null);
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
    return this.head;
  }
  // returns the last node in the list :
  getTail() {
    let currentNode = this.head;
    // travel to the last element :
    while (currentNode !== null) {
      if (currentNode.next === null) return currentNode;
      currentNode = currentNode.next;
    }
  }
  // returns the node at the given index :
  at(index) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.index === index) return currentNode;
      currentNode = currentNode.next;
    }
    return "no element found!";
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.prepend("second");
list.prepend("first");

console.log("list: ", list);
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(0));
