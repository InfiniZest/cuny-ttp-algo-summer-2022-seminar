// Problem Statement #

// Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

const has_path = function(root, sum) {
  let s = [];

  s.push([root, (sum - root.value)]);

  if (root === null)
    return false;
  else
    s.push([root, (sum - root.value)]);

  while (s.length !== 0)
  {
    let poppedNode = s.pop(); 
    let node = poppedNode[0];
    let remainingSum = poppedNode[1];
    
    if (remainingSum === 0 && (node.left === null && node.right === null))
      return true;
      
    if (node.left !== null)
      s.push([node.left, (remainingSum - node.left.value)]);
  
    if (node.right !== null)
      s.push([node.right, (remainingSum - node.right.value)]);
  }

  return false;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)
