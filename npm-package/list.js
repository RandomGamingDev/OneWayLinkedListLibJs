let Linked = {}

Linked.Node = class {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;              
  }
  
  clone() {
    return new Linked.Node(this.data, this.next);
  }
}

Linked.List = class {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }
  
  push(data) {
    this.length++;
    if (this.length == 1) {
      this.head = new Linked.Node(data);
      this.tail = this.head;
      return;
    }
    this.tail.next = new Linked.Node(data);
    this.tail = this.tail.next;
  }
  
  insert_head(data) {
    this.length++;
    let oldHead = this.head;
    this.head = new Linked.Node(data);
    this.head.next = oldHead;
  }
  
  insert(node, data) {
    this.length++;
    let next = node.next;
    node.next = new Linked.Node(data);
    node.next.next = next;
  }
  
  append(list) {
    for (let i = list.head; i != null; i = i.next)
      this.push(i.value);
  }
  
  copy(list) {
    this.clear();
    this.append(list);
  }
  
  erase_head() {
    this.length--;
    if (length == 0) {
      this.head = new Linked.Node();
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
    this.head = new Linked.Node();
    this.tail = this.head;
  }
  
  	
  ind(i) {
    let toReturn = this.head;
    for (; i > 0; i--)
      toReturn = toReturn.next;
    return toReturn;
  }
}

module.exports = Linked;
