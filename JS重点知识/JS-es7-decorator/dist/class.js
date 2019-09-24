"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function who(Pname) {
  // console.log(target)
  // target.Pname = '蜗牛';
  // return target;
  return function (target) {
    console.log(target);
    target.Pname = Pname;
    return target;
  };
} // @who


var // @who({
//   name: '蜗牛'
// })
Man = (_dec = who('蜗牛弟弟'), _dec(_class =
/*#__PURE__*/
function () {
  function Man() {
    _classCallCheck(this, Man);
  }

  _createClass(Man, [{
    key: "xiangqin",
    value: function xiangqin() {
      // console.log(`蜗牛去相亲了`);
      console.log("".concat(Man.Pname, "\u53BB\u76F8\u4EB2\u4E86"));
    }
  }]);

  return Man;
}()) || _class);
var man = new Man();
man.xiangqin();

var Man1 =
/*#__PURE__*/
function () {
  function Man1() {
    _classCallCheck(this, Man1);
  }

  _createClass(Man1, [{
    key: "xiangqin",
    value: function xiangqin() {
      console.log("\u8717\u725B\u5F1F\u5F1F\u53BB\u76F8\u4EB2\u4E86"); // console.log(`${Man.name}去相亲了`);
    }
  }]);

  return Man1;
}();