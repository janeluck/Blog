---
title: JavaScript对象相等性判断
date: 2018-02-19 21:07:25
tags: JavaScript
---


函数isEqual接收两个对象, 判断它们的相等性, 返回boolean

### 根据相等判断的实用性, 做出如下的相等性说明:
 + 原始类型`Number`, `String`, `Boolean`, `Undefined`, `Null`: 直接通过===判断, 经过对象包装(eg: new Number(1))的这类对象转换为原始类型再判断(即_.isEqual(new Number(1), 1)===true)

 + 引用类型`Object`: 引用相同, 必然相等; 引用不同, 进行深入比较(其中type为function的类型, 先判断构造函数是是否相等, 再判断其自有的属性和方法是否也一致)


##### 原生js存在的不完善地方,这里列举一些常用到的特例:

 + 原生会返回true的情况:
    - `null == undefined`(通过`null === undefined`返回false修正)
    - `-0 === +0`(通过`-Infinity === Infinity`返回false修正)
    - `NaN !== NaN`(通过`if(a!==a) return (b!==b)`修正)

 + 原生会返回false
    - 经过对象包装的原始类型的比较: `new Number(1) === 1` (原生的这样判断其实是无可厚非的, 实际运用中我们统一都归为相等)


### 用到的工具:
+ typeof
+ Object.prototype.toString
+ 运算符`+`可以把字符串转为数字
+ lodash的keys,has方法

### 使用例子:
```js
isEqual({name: 'rose'}, {name: 'rose'}) // 返回true
isEqual([{name: 'rose'}, 2], [{name: 'rose'}, 2]) // 返回true
var A = function(){}
var B = new A
var C = new A
isEqual(B, C) //返回true
```

### 代码：

```js
import _ from 'lodash'
var toString = Object.prototype.toString

var isEqual = function (a, b, aStack, bStack) {
  //原始类型Number, String, Boolean

  // 0 === -0 使用 1 / 0 !== 1/ -0 排除

  if (a === b) return a !== 0 || 1 / a === 1 / b

  // null == undefined  返回true
  // null === undefined 返回false
  if (a == null || b == null) return a === b


  // isNaN !== isNaN 返回true
  if (a !== a) return b !== b

  var className = toString.call(a)
  if (className !== toString.call(b)) return false
  switch (className) {

    case '[object RegExp]':
    case '[object String]':
      return '' + a === '' + b

    case '[object Number]':
      if (+a !== +a) return +b !== +b
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
    // todo case '[object Symbol]'
  }

  // 判断a 是否为数组
  var areArrays = className === '[object Array]'
  if (!areArrays) {
    if (typeof a !== 'object' || typeof b !== 'object') return false

    // Objects with different constructors are not equivalent, but `Object`s or `Array`s
    // from different frames are.
    // 先判断构造函数是否相同
    var aCtor = a.constructor, bCtor = b.constructor
    if (aCtor !== bCtor) return false
  }


  aStack = aStack || []
  bStack = bStack || []


  var length = aStack.length
  while (length--) {
    // 避免循环引用导致的死循环
    if (aStack[length] === a) return bStack[length] === b
  }

  aStack.push(a)
  bStack.push(b)



  if (areArrays) {
    length = a.length
    if (length !== b.length) return false


    while (length--) {
      if (!isEqual(a[length], b[length], aStack, bStack)) return false
    }


  } else {
    var keys = _.keys(a), key
    length = keys.length
    if (_.keys(b).length !== length) return false;

    while (length--) {
      // Deep compare each member
      // 递归比较
      key = keys[length];
      if (!(_.has(b, key) && isEqual(a[key], b[key], aStack, bStack))) return false;
    }

  }

  aStack.pop()
  bStack.pop()
  return true
}
export {
  isEqual
}

```




参考链接:
+ [lodash](https://lodash.com/docs/4.17.4)
+ [underscore源码分析](https://github.com/hanzichi/underscore-analysis/blob/master/underscore-1.8.3.js/underscore-1.8.3-analysis.js)




