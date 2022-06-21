// Problem Statement #

// Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
    }
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

const connect_level_order_siblings = function(root) {
  let q = new Queue();
  let levelSize = 1;

  if (root.val !== null)
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

      if (levelSize === 1)
      {
        q.peek().next = null;
        q.dequeue();
        levelSize = q.length;
      } else
      {
        let currentNode = q.peek();
        q.dequeue();
        currentNode.next = q.peek();
        levelSize--;
      }
    }
  }
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()
