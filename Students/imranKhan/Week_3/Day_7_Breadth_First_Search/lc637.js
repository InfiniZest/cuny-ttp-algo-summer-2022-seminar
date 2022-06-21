// Problem Statement #

// Given a binary tree, populate an array to represent the averages of all of its levels.

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

const find_level_averages = function(root) {
  result = [];
  let sumOfLevel = 0;
  let levelSize = 1;
  let maxLevelSize = levelSize;
  let q = new Queue();

  if (root !== null)
  {
    q.enqueue(root);
    while (q.peek())
    {
      if (q.peek().left !== null)
      {
        q.enqueue(q.peek().left);
      }

      if (q.peek().right !== null)
      {
        q.enqueue(q.peek().right);
      }

      sumOfLevel += q.peek().value;
      q.dequeue();
      levelSize--;

      if (levelSize === 0)
      {
        result.push(sumOfLevel / maxLevelSize);
        sumOfLevel = 0;
        maxLevelSize = q.length;
        levelSize = q.length; 
      }
    }
  }

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)
