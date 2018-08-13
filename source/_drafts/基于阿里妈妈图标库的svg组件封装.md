---
title: 基于阿里妈妈图标库的svg组件封装
tags: 
---


1. 登录[阿里妈妈图标库](http://www.iconfont.cn/)创建项目`fancy`，设置Symbol前缀为`fancyIcon`，上传或者商城选购图标到自己的项目，生成Symbol类的JS文件
2. 为自己的工程封装图标通用组件
```
import React, {PureComponent} from 'react'

export default class SvgIcon extends PureComponent {
  render() {
    const {type, className, ...others} = this.props
    return <svg {...others} className={`fancyIcon ${className || ''}`}>
      <use xlinkHref={`#icon-${type}`}></use>
    </svg>
  }
}
```
3. 使用示例

```
import SvgIcon from 'SvgIcon'
<SvgIcon type="huli" />

```
