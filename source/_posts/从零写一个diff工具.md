---
title: 从零写一个diff工具
date: 2018-03-13 18:57:08
tags:
- Algorithm
- Git
- JavaScript
---

### 基础
比较两个文件的不同，并按行输出，输出结果类似于unix命令`diff`和`git diff`。
两个文件的比较基于`最长公共子序列`, 用动态规划的方式求得结果。

### 输出结果
![](/uploads/lineDiffResult.jpg)

### 源码地址
[lineDiff](https://github.com/janeluck/lineDiff)