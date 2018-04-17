---
title: webpack配置开发相关问题集锦
tags:
  - Webpack
  - JavaScript
date: 2018-03-22 11:09:09
---



收集整理项目开发中, webpack配置的相关问题

- 文件路径名在不同操作系统大小写的问题
    - 原因: 有的操作系统对于文件路径大小写敏感, 有的不敏感, 导致webpack报错. windows和macOS大小写不敏感, 其他类unix的系统大小写敏感.
    - 解决办法: develop环境引入[case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin), 强制规范模块命名的书写, 引用。
    - 具体原理: 比较文件路径的大小写是否与引用时一致, 不一致的时候报错。保证整个开发流程是大小写敏感, 引用正确。

- alias
    开发中可以简写某个目录文件路径, 不用总写相对路径, 尤其适合自定义模块的引用。
    `webpack`的config添加配置为:
    ```javacript
    {
        resolve: {

            alias: {
                src: path.resolve(__dirname, './src')
            }
        }
    }
    ```
    使用babel的可以引入插件[babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver#readme)
    `.babelrc`配置如下
    ```json
    {
        "plugins": [
            [
                "module-resolver",
                {
                    "alias": {
                        "src": "./src"
                    }
                }
            ]
        ]
    }
    ```


- 全局引用
[provide-plugin](https://webpack.js.org/plugins/provide-plugin/)
- 动态加载
[dynamic-imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
  使用`react-loadable`封装需要动态加载的组件, 并指定编译后的文件名
  1. 封装
  ```javascript
  import Loadable from 'react-loadable'
  import Loading from './Loading'

  const AsyncEchartsForReact = Loadable({
    // 'echarts-for-react' 为需要动态加载使用的组件
    // webpackChunkName指定编译后的文件名
    loader: () => import(/* webpackChunkName: "echarts-for-react" */ 'echarts-for-react'),
    loading: Loading,
  })
  export default AsyncEchartsForReact
  ```


  2. 使用
  ```javascript
  // 弃用直接引用
  // import  ReactEcharts from 'echarts-for-react'

  // 引入封装过的组件
  import  ReactEcharts from '...path/AsyncEchartsForReact'
  ```

  3. Loading组件
  ```javascript
  import React from 'react';
  export default function Loading(props) {
    if (props.isLoading) {
        if (props.timedOut) {
        return <div>Loader timed out!</div>;
        } else if (props.pastDelay) {
            return <div>Loading...</div>;
        } else {
            return null;
        }
    } else if (props.error) {
        return <div>Error! Component failed to load</div>;
    } else {
        return null;
    }
   }
  ```



<!-- - webpack编译的时候 ctrl+c没用 kill -9 -->


### 参考链接
- [文件命名大小写.维基百科](https://en.wikipedia.org/wiki/Filename#Letter_case_preservation)
- [webpack.alias](https://webpack.js.org/configuration/resolve/)
- [react-router/code-spliting](https://reacttraining.com/react-router/web/guides/code-splitting)