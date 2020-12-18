function TreeNode(val,left,right){
    this.val = (val===undefined?0:val)
    this.left=(left===undefined?null:left)
    this.right = (right===undefined?null:right)
}

// 递归
var inorderTraversal1 =function (root){
    const res =[]
    const inorder = (root)=>{
        if(!root){
            return 
        }
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    return res
}
// 栈
var inorderTraversal2 =function(root){
    const res =[]
    const stk =[]
    while(root||stk.length){
        while(root){
            stk.push(root)
            root = root.left
        }
        toot =stk.pop()
        res.push(root.val)
        root = root.right
    }
    return res
}