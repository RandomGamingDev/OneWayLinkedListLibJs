class LinkedNode {
  constructor(data = null, next = null) {
    this.data = data
    this.next = null                
  }
  
  clone() {
    return new LinkedListNode(this.data, this.next);
  }
}

class LinkedList {
  constructor() {
    this.head = new LinkedNode();
    this.tail = this.head;
    this.length = 0;
  }
  
  push(data) {
    this.length++;
    if (this.length == 1) {
      this.head = new LinkedNode(data);
      this.tail = this.head;
      return;
    }
    this.tail.next = new LinkedNode(data);
    this.tail = this.tail.next;
  }
  
  insert_head(data) {
    let oldHead = this.head;
    this.head = new LinkedNode(data);
    this.head.next = oldHead;
  }
  
  insert(node, data) {
    let next = node.next;
    node.next = new LinkedNode(data);
    node.next.next = next;
  }
  
  append(list) {
    for (let i = list.head; i != nullptr; i = i.next)
      this.push(i.value);
  }
  
  copy(list) {
    this.clear();
    this.append(list);
  }
  
  erase_head() {
    if (length == 1) {
      this.head = new LinkedNode();
      this.tail = this.head;
    }
    this.head = this.head.next;
  }
  
  erase_next(node) {
    if (node.next == this.tail)
      this.tail = node;
    node.next = node.next.next;
    this.length--;
  }
  
  clear() {
    this.head = new LinkedNode();
    this.tail = this.head;
  }
}