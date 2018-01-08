function Stack() {
  this._storage = []
}

Stack.prototype = {
  push: function(data) {
    this._storage.push(data)
  }
  pop: function() {
    this._storage.pop()
  }
  top: function() {
    var len = this._storage.length
    if (len) {
      return this._storage[len - 1]
    }
  }
  length: function() {
    return this._storage.length
  }
}