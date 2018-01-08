function Node(data) {
  this.data = data
  this.parent = null
  this.children = []
}

function Tree(data) {
  var node = new Node(data)
  this._root = node
}

Tree.prototype.traverseDF = function(callback) {
  // 递归、立刻执行函数
  (function recurse(currentNode) {
    for (var i = 0, len = currentNode.children.length; i < len; i++) {
      recurse(currentNode.children[i])
    }

    callback(currentNode)
  }(this._root))
}

Tree.prototype.traverseBF = function(callback) {
  var queue = new Queue()
  queue.enqueue(this._root)
  var currentTree = queue.dequeue()

  while (currentTree) {
    for (var i = 0, len = currentTree.children.length; i < len; i++) {
      queue.enqueue(currentNode.children[i])
    }

    callback(currentTree)
    currentTree = queue.dequeue()
  }
}

Tree.prototype.contains = function(callback, traverse) {
  traverse.call(this, callback)
}

// 队列
function Queue() {
  this._storage = {}
  this.oldestIndex = 0
  this.newestIndex = 0
}

Queue.prototype = {
  enqueue: function(data) {
    var newestIndex = this.newestIndex++
    this._storage[newestIndex] = data
  },
  dequeue: function() {
    var newestIndex = this.newestIndex,
        oldestIndex = this.oldestIndex,
        deleteData
    if (oldestIndex !== newestIndex) {
      deleteData = this._storage[oldestIndex]
      delete this._storage[oldestIndex]
      this.oldestIndex++
      
      return deleteData
    }
  },
  size: function() {
    return this.newestIndex - this.oldestIndex
  }
}