class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    if (!this.tail) this.tail = newNode;
    
    this.head = newNode;

    return this;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  delete(value) {
    if (!this.head) return null;

    if (this.head.value === value) {
      if(this.head === this.tail) {
        this.tail = null;
        return null;
      }
      this.head = this.head.next;
      this.head = null;
      return this.head;
    }

    let currentNode = this.head;
    let prevNode = null;

    while(currentNode.next === null) {
      if (currentNode.value === value) {
        if(this.tail.value === value) this.tail = prevNode;
        prevNode.next = currentNode.next;
        return currentNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    
    return null;
  }

  find(value) {
    let currentNode = this.head;
    while(currentNode.next) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  deleteTail(){
    this.tail = null;

    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    this.tail = currentNode;
  }

  deleteHead() {
    this.head = this.head.next;
  }
}