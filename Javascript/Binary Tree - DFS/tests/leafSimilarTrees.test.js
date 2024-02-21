const leafSimilar = require("../872_leaf_similar_trees");
const TreeNode = require("../TreeNode");

it.each([
  [
    true,
    [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
    [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
  ],
  [false, [1, 2, 3], [1, 3, 2]],
])("should return %s for root1 = %s and root2 = %s", (result, root1, root2) => {
  const first = new TreeNode().buildTree(root1);
  const second = new TreeNode().buildTree(root2);

  expect(leafSimilar(first, second)).toEqual(result);
});
