function Node(data) {
  this.data = data
  this.prev = null
  this.next = null
}

function DoubleList() {
  this._length = 0
  this.head = null
  this.tail = null
}

DoubleList.prototype = {
  add: function(data) {
    var node = new Node(data)

    if (this._length) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      this.head = node
      this.tail
    }

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
        afterNode = null,
        message = {failure: 'Failure: non-exitstent node in this list'}

    // 位置无效
    if (position < 0 || position > length) {
      throw new Error(message.failure)
    }

    // 删除第一个元素
    if (position === 0) {
      this.head = currentNode.next
      // 如有第二个元素
      if (this.head) {
        this.head.prev = null
      } else {
        this.tail = null
      }

    // 删除最后一个元素
    } else if (position === length - 1){
      beforeNode = this.tail
      beforeNode.next = null
      this.tail = beforeNode

    // 删除中间元素
    } else {
      while (count < position) {
        currentNode = currentNode.next
        count++
      }
      beforeNode = currentNode.prev
      afterNode = currentNode.next
      beforeNode.next = afterNode
      afterNode.prev = beforeNode
    }
    currentNode = null
    this._length--
  }
}