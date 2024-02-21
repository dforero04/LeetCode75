const maxDepth = require("../104_max_depth_binary_tree");
const TreeNode = require("../TreeNode");

it.each([
  [3, [3, 9, 20, null, null, 15, 7]],
  [2, [1, null, 2]],
])("should return %s for input binary tree = %s", (result, treeArray) => {
  const root = new TreeNode().buildTree(treeArray);
  expect(maxDepth(root)).toEqual(result);
});
