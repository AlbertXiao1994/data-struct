function Node(data) {
  this.data = data
  this.next = null
}

function SingleList() {
  this._length = 0
  this.head = null
}

SingleList.prototype = {
  add: function(data) {
    var node = new Node(data),
        currentNode = this.head

    // 不存在节点
    if (!currentNode) {
      this.head = node
      this._length++
      return
    }

    // 已存在节点
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
    this._length++
  },
  searchNodeAt: function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        message = {failure: 'Failure: non-exitstent node in this list'}

    // 不存在
    if (length === 0 || position > length || position < 0) {
      throw new Error('message.failure')
    }

    // 存在
    while (conut < position) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  },
  removeAt: function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 0,
        beforeNode = null,
        message = {failure: 'Failure: non-exitstent node in this list'}

    // 位置无效
    if (position < 0 || position > length) {
      throw new Error(message.failure)
    }

    // 删除第一个元素
    if (position === 0) {
      this.head = currentNode.next
      currentNode = null
      this._length--
      return 
    }

    // 删除其他元素
    while (count < position) {
      beforeNode = currentNode
      currentNode = currentNode.next
    }
    beforeNode.next = currentNode
    currentNode = null
    this._length--
  }
}