function TreeNode(val) {
    return {
        val,
        children: []
    }
}

let postOrder = (root) => {
    if (root === null) {
        return
    }
    root.children.forEach(element => {
        return postOrder(element);
    });
    console.log(root.val);
}

let root1 = TreeNode(1);
root1.children.push(TreeNode(3));
root1.children.push(TreeNode(2));
root1.children.push(TreeNode(4));

root1.children[0].children.push(TreeNode(5));
root1.children[0].children.push(TreeNode(6));

postOrder(root1)