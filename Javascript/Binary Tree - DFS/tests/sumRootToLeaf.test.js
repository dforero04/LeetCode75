const sumLeafToRoot = require("../129_sum_root_to_leaf");
const TreeNode = require("../TreeNode");

it.each([
  [25, [1, 2, 3]],
  [1026, [4, 9, 0, 5, 1]],
])("should return %s for input binary tree = %s", (result, treeArray) => {
  const root = new TreeNode().buildTree(treeArray);

  expect(sumLeafToRoot(root)).toEqual(result);
});
