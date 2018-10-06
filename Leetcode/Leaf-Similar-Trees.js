function TreeNode(val) {
    return {
        val,
        left: null,
        right: null
    }
}


var leafSimilar = function (root1, root2) {

    let leafes = (node, arr) => {
        if (node === null) {
            return;
        }
        
        
        leafes(node.left, arr);
        leafes(node.right, arr);

        return arr 
    }

    let firstLeafArray = leafes(root1, []);
    let secondLeafArray= leafes(root2, []);

    if (firstLeafArray.length !== secondLeafArray.length) {
        return false
    }

    for (let i = 0; i < firstLeafArray.length; i++) {
        if (firstLeafArray[i] !== secondLeafArray[i]) {
            return false;
        }
    }
    return true;
};



// Create First Tree
let root1 = TreeNode(3);
root1.left = TreeNode(5);
root1.right = TreeNode(1)

root1.left.left = TreeNode(6); // first leaf;
root1.left.right = TreeNode(2);
root1.left.right.left = TreeNode(7); // second leaf
root1.left.right.right = TreeNode(4); // third leaf

root1.right.left = TreeNode(9); // fourth leaf
root1.right.right = TreeNode(8); // fifth leaf

// Create Second Tree
let root2 = TreeNode(1);
root2.left = TreeNode(8);
root2.right = TreeNode(3);

root2.left.left = TreeNode(6); // first leaf;
root2.left.right = TreeNode(9);
root2.left.right.left = TreeNode(7); // second leaf
root2.left.right.right = TreeNode(4); // third leaf

root2.right.left = TreeNode(9); //fourth leaf
root2.right.right = TreeNode(8); // fifth leaf

console.log(leafSimilar(root1, root2));