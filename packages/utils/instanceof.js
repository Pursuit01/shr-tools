/**
 *
 * @param {*} x 对象
 * @returns 对象的子类型
 * @description: 该方法不同于 instanceof，后者需要指定子类型才可以判断.
 *
 * 场景：当x是数组时执行某一操作，是对象字面量形式时，执行另一操作.
 *      如果使用instanceof判断，即 x instanceof Object。那么数组，函数，正则，日期对象等 都会被识别为true，所以无法判断。
 *      当然也可以将对象字面量的判断放在分支结构的最后，类似于排除法，不是数组，函数，正则，日期等，就一定是对象字面量。
 */
function classOf(x) {
  return Object.prototype.toString.call(x).slice(8, -1);
}
