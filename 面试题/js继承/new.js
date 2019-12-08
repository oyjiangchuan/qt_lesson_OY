function newObj(Constrctor, ...args) {
  let obj = {}
  obj.__proto__ = Constrctor.prototype
  let ret = Constrctor.apply(obj, args)
  return typeof ret === "object" ? ret : obj
}

