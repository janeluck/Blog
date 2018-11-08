---
title: react性能优化
tags: react
---

+ 对比数据减少不必要的render

    原始数据类型,引用数据类型
    - scu
    - pureComponent
    - immutable
    - prop函数属性 避免使用行内定义函数，比如在prop上的箭头函数和bind
    - defaultValue

+ key

    应用于diff算法
    - key改变 -> 不再dom diff计算， 直接记录
    - key不变 其他有变化 -> 根据具体情况，比如移动节点等



+ perf分析组件性能



### 参考链接

- [Performance Engineering with React](https://benchling.engineering/performance-engineering-with-react-e03013e53285)
- [Why Arrow Functions and bind in React’s Render are Problematic](https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36)




易于开发
1. 开发工具是否完善 
2. 生态圈是否繁荣
3. 社区是否活跃

易于扩展
1. 增加新功能是否容易
2. 新功能是否会显著增加系统复杂度

易于维护
1. 代码是否容易理解 2. 文档是否健全

易于测试
1. 功能的分层是否清晰
2. 副作用少
3. 尽量使用纯函数

易于构建
1. 使用通用技术和架构
2. 构建工具的选择