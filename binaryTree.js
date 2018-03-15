function Node(data, left, right) {
  this.data = data
  this.left = null
  this.right = null
}

function BinaryTree(data) {
  var node = new Node(data)
  this._root = node
}

// 前序遍历
BinaryTree.prototype.preOrderTraverse = function(node, callback) {
  if (node) {
    callback.call(node, callback)
    arguments.callee(node.left, callback)
    arguments.callee(node.right, callback)
  }
}

// 中序遍历
BinaryTree.prototype.inOrderTraverse = function(node, callback) {
  if (node) {
    arguments.callee(node.left, callback)
    callback.call(node, callback)
    arguments.callee(node.right, callback)
  }
}

// 后序遍历
BinaryTree.prototype.postOrderTraverse = function(node, callback) {
  if (node) {
    arguments.callee(node.left, callback)
    arguments.callee(node.right, callback)
    callback.call(node, callback)
  }
}