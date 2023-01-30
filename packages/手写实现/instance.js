/**
 * 实现 instanceof 关键字
 * myInstanceof(2, Number) -> true
 * myInstanceof(2, String) -> false
 * myInstanceof(2, Object) -> true
 * @param {*} left
 * @param {*} right
 */
function myInstanceof(left, right) {
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的 prototype 对象
  let prototype = right.prototype;
  // 顺着原型链递归查找
  while (true) {
    // 对象的原型不存在时退出循环
    if (!proto) return false;
    // 对象原型等于构造函数 prototype 时，返回true
    if (proto == prototype) return true;
    // 获取对象原型的原型，继续下一次循环
    proto = Object.getPrototypeOf(proto);
  }
}
