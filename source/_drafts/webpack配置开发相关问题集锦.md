---
title: webpack配置开发相关问题集锦
date: 2018-03-22 11:09:09
tags:
- Webpack
- JavaScript
---


收集整理项目开发中, webpack配置的相关问题



- 文件路径名在不同操作系统大小写的问题
    - 原因: 有的操作系统对于文件路径大小写敏感, 有的不敏感, 导致webpack报错. windows和macOS大小写不敏感, 其他类unix的系统大小写敏感.
    - 解决办法: develop环境引入[case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin), 强制规范模块命名的书写, 引用。
    - 具体原理: 比较文件路径的大小写是否与引用时一致, 不一致的时候报错。保证整个开发流程是大小写敏感, 引用正确。

- alias

- 全局模块

- 动态加载

- webpack编译的时候 ctrl+c没用 kill -9


### 参考链接
- [文件命名大小写.维基百科](https://en.wikipedia.org/wiki/Filename#Letter_case_preservation)