 if (typeof Object.assign2 != 'function') {
  Object.defineProperty(Object, 'assign2', {
    value: function(target) {
      'use strict';
      if (target === null || target === undefined) {
        throw new TypeError('Cannot conver undefined or null to object')
      }

      var to = Object(target)

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index]
        if (nextSource != null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) { // 判断该属性是不是本地自己的属性 因为for in 可能会枚举出原型链上的属性
              to[nextKey] = nextSource[nextKey]
            }
          }
        }
      }
      return to
    },
    writable: true,
    configurable: true
  })
 }

