---
title: react性能优化
tags: react
---

+ 对比数据减少不必要的render

    原始数据类型,引用数据类型
    - scu
    - pureComponent
    - immutable
    - prop函数属性
    - defaultValue

+ key

    应用于diff算法
    - key改变 -> 不再dom diff计算， 直接记录
    - key不变 其他有变化 -> 根据具体情况，比如移动节点等



+ perf分析组件性能

