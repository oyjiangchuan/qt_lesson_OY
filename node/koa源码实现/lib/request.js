let url = require('url')
let request = {
  get url() { // get 关键字 在调用该方法的时候不需要加括号
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
}

module.exports = request