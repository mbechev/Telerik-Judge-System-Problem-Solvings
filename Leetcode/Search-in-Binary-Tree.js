function TreeNode(val) {
    return {
        val,
        left: null,
        right: null
    }
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function (root, val) {

    if (root === null) {
        return [];
    }

    if (root.val === val) {
        return root;

    } else if (root.val < val) {
        return  searchBST(root.right, val);

    } else if (root.val > val) {
        return searchBST(root.left, val);
    }
}

let root = TreeNode(4);
root.left = TreeNode(2);
root.right = TreeNode(7);

root.left.left = TreeNode(1);
root.left.right = TreeNode(3);
// console.log(root);

searchBST(root, 2)