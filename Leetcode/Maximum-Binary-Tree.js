//Using BFS, Binary tree, recursion, Queue 

var constructMaximumBinaryTree = function (nums) {
    function TreeNode(val) {
        return {
            val,
            left: null,
            right: null,
        }
    };

    let maxNum = Math.max(...nums);
    let index = nums.indexOf(maxNum);

    let leftSubArr = [];
    for (let i = 0; i < index; i++) {
        leftSubArr.push(nums[i])
    }
    leftSubArr.sort((a, b) => b - a)

    let rightSubArr = [];
    for (let i = index + 1; i < nums.length; i++) {
        rightSubArr.push(nums[i])
    }
    rightSubArr.sort((a, b) => b - a);

    let root = TreeNode(maxNum);
    root.left = TreeNode(leftSubArr[0]);
    root.right = TreeNode(rightSubArr[0]);

    let leftSubTree = (index, node) => {
        if (index > leftSubArr.length - 1) {
            return
        }
        node.right = TreeNode(leftSubArr[index])
        leftSubTree(index + 1, node.right);
    }
    leftSubTree(1, root.left);


    let rightSubTree = (index, node) => {
        if (index > rightSubArr.length - 1) {
            return
        }
        node.left = TreeNode(rightSubArr[index]);
        rightSubTree(index + 1, node.left);
    }
    rightSubTree(1, root.right)


    function BFT(node) {
        node.level = 1;
        var queue = [node];
        var output = [];
        var current_level = node.level;

        while (queue.length > 0) {

            current_node = queue.shift();

            if (current_node === null) {
                output.push(null);
            } else {

                if (current_node.level > current_level) {

                    current_level++;
                }

                output.push(current_node.val);

                if (current_node.left === null && current_node.right) {
                    queue.push(null);
                }
                if (current_node.left) {
                    current_node.left.level = current_level + 1;
                    queue.push(current_node.left);
                }

                
                if (current_node.right === null && current_node.left) {
                    queue.push(null);
                }

                if (current_node.right) {
                    current_node.right.level = current_level + 1;
                    queue.push(current_node.right);
                }
            }
        }
        console.log(output);
        return output
    }
    return BFT(root);
};
constructMaximumBinaryTree([3, 2, 1, 6, 0, 5])