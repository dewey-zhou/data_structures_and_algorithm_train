var preorder = function(root) {
    let array = []
    var dfs = function (node) {
        if (node === null) {
            return
        }
        array.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i])
        }
        return
    }
    dfs(root)
    return array
};
