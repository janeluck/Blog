---
title: JavaScript数值处理相关tips
tags: JavaScript
---


+ toFixed后会变成string类型
+ Number会改变精度
+ parseFloat

Number
 + isNaN
 + parseFloat
    没法保留小位数


千分号
补位0

#### 参考链接

- [JavaScript 浮点数陷阱及解法](https://github.com/camsong/blog/issues/9)



// toFixed它是一个四舍六入五成双的诡异的方法，"四舍六入五成双"含义：对于位数很多的近似数，当有效位数确定后，其后面多余的数字应该舍去，只保留有效数字最末一位，这种修约（舍入）规则是“四舍六入五成双”，也即“4舍6入5凑偶”这里“四”是指≤4 时舍去，"六"是指≥6时进上，"五"指的是根据5后面的数字来定，当5后有数时，舍5入1；当5后无有效数字时，需要分两种情况来讲：①5前为奇数，舍5入1；②5前为偶数，舍5不进。（0是偶数）
export const getRoundValue = (value, decimal) => {
  const pow = Math.pow(10, decimal);
  return (Math.round(value * pow) / pow).toFixed(decimal);
}
