/*
Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
*/

function leafSimilar(root1, root2) {
  const str1 = [];
  const str2 = [];

  const helper = (curNode, str) => {
    // If leaf node, add to array
    if (curNode.left === null && curNode.right === null) {
      str.push(curNode.val);
    } else {
      if (curNode.left) helper(curNode.left, str);
      if (curNode.right) helper(curNode.right, str);
    }
  };

  helper(root1, str1);
  helper(root2, str2);

  // JSON.stringify is needed to capture the actual value of the leaf node.
  // Example: leaf nodes of [1, 23, 4] is different than "1234"
  return JSON.stringify(str1) === JSON.stringify(str2);
}

/*
    Completed on my own. Had to tweak the TreeNode class to work with this problem.
    Algorithm is similar to that of 129. Reasoning for JSON.stringify is above.
*/

module.exports = leafSimilar;
