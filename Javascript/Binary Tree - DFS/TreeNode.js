module.exports = class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }

  buildTree = (nums) => {
    if (nums.length === 0) return null;

    // Initialize root and add to queue
    let root = new TreeNode(nums[0]);
    let q = [root];
    // Start i at 1 because we already took care of the first index
    let i = 1;
    // While we still have items in the array
    while (i < nums.length) {
      // Get the first value in the queue
      let curr = q.shift();
      if (i < nums.length) {
        // Create a TreeNode with the value at nums[i]
        // and add that value to the queue
        curr.left = new TreeNode(nums[i++]);
        q.push(curr.left);
      }
      if (i < nums.length) {
        // Create a TreeNode with the value at nums[i]
        // and add that value to the queue
        curr.right = new TreeNode(nums[i++]);
        q.push(curr.right);
      }
    }
    return root;
  };
};
