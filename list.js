let LinkedList = {}
LinkedList.Node = class {
  constructor(data = null, next = null) {
    this.data = data
    this.next = null                
  }
  
  clone() {
    return new LinkedListNode(this.data, this.next);
  }
}

LinkedList.List {
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
    this.length++;
    let oldHead = this.head;
    this.head = new LinkedNode(data);
    this.head.next = oldHead;
  }
  
  insert(node, data) {
    this.length++;
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
    this.length--;
    if (length == 0) {
      this.head = new LinkedNode();
      this.tail = this.head;
      return;
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
    this.length = 0;
    this.head = new LinkedNode();
    this.tail = this.head;
  }
}
