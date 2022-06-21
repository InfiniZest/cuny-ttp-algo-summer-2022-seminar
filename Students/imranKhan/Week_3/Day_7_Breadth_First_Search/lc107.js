// Problem Statement #

// Given a binary tree, populate an array to represent its level-by-level traversal in reverse order, i.e., the lowest level comes first. You should populate the values of all nodes in each level from left to right in separate sub-arrays.

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

const traverse = function(root) {
  let result = [];
  let levelSize = 1;
  let q1 = new Queue();
  let q2 = new Queue();
  let subArr = [];

  if (root.val !== null)
  {
    q1.enqueue(root);
    while (q1.peek())
    {
      if (q1.peek().left !== null)
      {
        q1.enqueue(q1.peek().left);
      }

      if (q1.peek().right !== null)
      {
        q1.enqueue(q1.peek().right);
      }

      subArr.push(q1.peek().value);
      q1.dequeue();
      levelSize--;

      if (levelSize === 0)
      {
        q2.enqueue(subArr);
        console.log(subArr);
        subArr = [];
        levelSize = q1.length;
      }
    }

    for (let i = q2.length - 1; i >= 0; i--)
      result[i] = q2.dequeue();
  }

  return result;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Reverse level order traversal: ${traverse(root)}`)
