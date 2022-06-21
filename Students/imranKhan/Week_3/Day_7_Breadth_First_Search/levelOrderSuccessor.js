// Problem Statement #

// Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

//            (  1  )
//           /       \
//       (  2  )    (  3  )
//       /     \       \
// (  4  )  (  5  )   (  6  )

// Given Node: 3
// Level Order Successor: 4


//             (  12  )
//            /       \
//       (  7  )    (  1  )
//       /            /    \
//  (  9  )       (  10  )(  5  )

// Given Node: 9
// Level Order Successor: 10

class TreeNode {

  constructor(val) {
    this.val = val;
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

const find_successor = function(root, key) {
  let q = new Queue();

  if (root !== null)
  {
    q.enqueue(root);
    while(q.peek())
    {
      if (q.peek().left !== null)
      {
        q.enqueue(q.peek().left);
      }

      if (q.peek().right !== null)
      {
        q.enqueue(q.peek().right);
      }

      if (q.peek().val === key)
      {
        q.dequeue();
        return q.peek();
      } else
        q.dequeue();
    }
  }

  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
  console.log(result.val)
result = find_successor(root, 9)
if (result != null)
  console.log(result.val)

