## ES-module
es6 模块化
1. 导出
  1. 默认导出 export default
  2. 命名导出 export 命名
2. 导入
  1. 默认导入 import test from './a.js'
  2. 命名导入 import {name, age} from './a.js' (注意这不是解构的语法,这是导入的语法)
  3. 全部导入 import * as rename from './a.js' (不管用什么方式导出的,全部导入一个重命名为rename的对象中)
