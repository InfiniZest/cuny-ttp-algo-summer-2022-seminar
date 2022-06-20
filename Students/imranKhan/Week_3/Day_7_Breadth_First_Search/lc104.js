// Problem#

// Given a binary tree, find its maximum depth (or height).

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

function find_maximum_depth(root) {
  let levelSize = 1;
  let maxLevel = 1;
  let q = new Queue();
  if (root.val !== 0)
  {
    q.enqueue(root);
    while (q.peek())
    {
      if (levelSize === 0)
      {
        levelSize = q.length;
        maxLevel++;
      }
      if (q.peek().left !== null)
        q.enqueue(q.peek().left);

      if (q.peek().right !== null)
        q.enqueue(q.peek().right);

      q.dequeue();
      levelSize--;
    }

    return maxLevel;
  }
  return -1
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
root.left.left = new TreeNode(9);
root.right.left.left = new TreeNode(11);
root.left.right = new TreeNode(14);
root.left.right.left = new TreeNode(1);
root.left.right.left.right = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.left.right.left.right.right = new TreeNode(6);
console.log(`Tree Maximum Depth: ${find_maximum_depth(root)}`);
