class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  prepend(value) {
    const newNode = new Node(value, null, this.head);
    this.head.prev = newNode;
    this.head = newNode;

    if(!this.tail) this.tail = newNode;

    return this;
  }

  append(value) {
    const newNode = new Node(value, this.tail);

    if(!this.head) this.head = newNode;

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
    if (!this.head) return null;

    let currentNode = this.head;
    while (currentNode.next) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }
    return null;
  }

  reverseFind(value) {
    if (!this.tail) return null;

    let currentNode = this.tail;
    while (currentNode.prev) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.prev;
    }
    return null;
  }
}