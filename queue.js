function Queue() {
  this._storage = {}
  this.oldestIndex = 0
  this.newestIndex = 0
}

Queue.prototype = {
  enqueue: function(data) {
    var newestIndex = this.newestIndex++
    this._storage[newestIndex] = data
  }
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
  }
  size: function() {
    return this.newestIndex - this.oldestIndex
  }
}