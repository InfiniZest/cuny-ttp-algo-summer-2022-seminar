// Problem Statement #

// Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

class Queue {
  constructor() 
  {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) 
  {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() 
  {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() 
  {
    return this.elements[this.head];
  }
  get length() 
  {
    return this.tail - this.head;
  }
  get isEmpty() 
  {
    return this.length === 0;
  }
}

const find_minimum_depth = function(root) {
  let q = new Queue();
  let levelSize = 1;
  let level = 1;
  if (root.value !== null)
  {
    q.enqueue(root);
    while (q.peek().left !== null || q.peek().right !== null)
    {
      if (q.peek().left !== null)
      {
        q.enqueue(q.peek().left);
      }

      if (q.peek().right !== null)
      {
        q.enqueue(q.peek().right)
      }

      q.dequeue();
      levelSize--;

      if (levelSize === 0)
      {
        levelSize = q.length;
        level++;
      }
    }
    return level;
  }

  return -1;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
root.left.left = new TreeNode(9)
root.right.left.left = new TreeNode(11)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
