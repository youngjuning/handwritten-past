/*
* object为要绑定方法的对象
* name为绑定方法所用的属性名称
* fn为要绑定的方法
* */
function addMethod(object, name, fn) {
  // 保存原有的函数，因为调用的时候可能不匹配传入的参数个数
  var old = object[name];
  // 创建一个新匿名函数作为新方法
  object[name] = function () {
    // 如果该匿名函数的形参个数和实参个数匹配，就调用该函数
    if (fn.length === arguments.length) {
      console.log("new",fn.length, arguments.length);
      return fn.apply(this, arguments)
    // 如果传入的参数不匹配，则调用原有的参数
    } else if (typeof old === 'function') {
      console.log("old",fn.length, arguments.length);
      return old.apply(this, arguments);
    }
  }
}

addMethod(Object.prototype, 'whatever', function () {
  console.log("零个参数");
});
addMethod(Object.prototype, 'whatever', function (a) {
  console.log("一个参数");
});
addMethod(Object.prototype, 'whatever', function (a, b) {
  console.log("两个参数");
});

whatever();
