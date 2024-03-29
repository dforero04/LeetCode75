/*
Easy

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
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
function maxDepth(root) {
  // Recursively check the whole tree to find the max
  return root === null
    ? 0
    : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

module.exports = maxDepth;
