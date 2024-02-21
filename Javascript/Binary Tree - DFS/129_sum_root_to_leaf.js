/*
Medium

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumLeafToRoot(root) {
  const values = [];

  const helper = (curNode, val) => {
    // Grow val until you reach a leaf node
    val = val * 10 + curNode.val;
    // If right and left are null, you hit a leaf node and add val to array
    if (!curNode.right && !curNode.left) {
      values.push(val);
    } else {
      // Uses DFS, calculates numbers recursively
      if (curNode.left) helper(curNode.left, val);
      if (curNode.right) helper(curNode.right, val);
    }
  };

  helper(root, 0);

  // Return all values added together
  return values.reduce((a, b) => a + b, 0);
}

module.exports = sumLeafToRoot;
