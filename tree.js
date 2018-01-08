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

Tree.prototype.add = function(data, toData, traverse) {
  var child = new Node(data),
      parent = null,
      callback = function(node) {
        if (node.data === toData) {
          parent = node
        }
      }
  this.contains(callback, traverse)
  if (parent) {
    parent.children.push(child)
    child.parent = parent
  } else {
    throw new Error('Cannot add node to a non-existent parent')
  }
}

Tree.prototype.remove = function(data, fromData, traverse) {
  var parent = null,
      callback = function(node) {
        if (node.data === toData) {
          parent = node
        }
      }
  this.contains(callback, traverse)
  if (parent) {
    var index = findIndex(parent.children, data)
    if (index !== undefined) {
      parent.children.splice(index, 1)
    } else {
      throw new Error('Cannot delete a non-existent node')
    }
  } else {
    throw new Error('Cannot delete node to a non-existent parent')
  }
}

function findIndex(arr, data) {
  var index
  arr.forEach(function(x,i) {
    if (x === data) {
      index = i
    }
  })
  return index
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