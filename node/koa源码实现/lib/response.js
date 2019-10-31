let response = {
  get body () {
    return this._body // get时返回该方法
  },
  set body (value) {
    this.res.statusCode = 200
    this._body = value // 当body被set时 先保存该方法
  }
}

module.exports = response