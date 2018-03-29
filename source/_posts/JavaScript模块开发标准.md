---
title: JavaScript模块开发标准
tags: JavaScript
date: 2018-03-29 17:18:18
---


+ CommonJS

  服务端NodeJS模块规范, 通过`require`同步加载依赖, 通过`exports`或`module.exports`生成模块接口


+ AMD

  Asynchronous Module Definition,声明模块时指定所有的依赖, 异步加载, 依赖前置

  ```javascript
  // 声明
  define("module", ["dep1", "dep2"], function(d1, d2) {
    return someExportedValue
  })
  // 使用
  require(["module", "../file"], function(module, file) { /* ... */ })
  ```


+ CMD

  Common Module Definition, AMD的依赖延迟加载版

  ```javascript
  // 声明
  define(function(require, exports, module) {
    var $ = require('jquery');
    var Spinning = require('./spinning');
    exports.doSomething = ...
    module.exports = ...
  })
  ```

+ ES6模块

  引入关键字`import`, `export`, `module`. 在编译时就能确定模块的依赖关系.

  ```javascript
  import "jquery";
  export function doStuff() {}
  module "localModule" {}
  ```


### 参考链接
- [模块系统](http://zhaoda.net/webpack-handbook/module-system.html)
- [ES6 Module](http://es6.ruanyifeng.com/#docs/module)