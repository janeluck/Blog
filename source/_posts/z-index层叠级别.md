---
title: z-index层叠级别
date: 2018-02-27 16:04:10
tags: Css
---


##### z-index<integer>:

只适用于定位元素, 不可继承, 计算值同设定值。
+ 该值指定了元素在当前层叠上下文中的层叠级别
+ 同时生成一个局部层叠上下文


##### 层叠规则:

1. 形成层叠上下文的元素的背景和边框
2. 层叠级别为负值的后代层叠上下文
3. 常规流内非行内非定位的子元素组成的层
4. 非定位的浮动子元素和他们的内容组成的层
5. 常规流内行内非定位子元素组成的层
6. 任何z-index是auto的定位子元素， 以及z-index是0的层叠上下文组成的层
7. 层叠级别为正值的后代层叠上下文

![](/uploads/stacklevel.png)


##### 附注：
+ 最初的层叠上下文是`root Element`
+ codepen:  <p data-height="265" data-theme-id="0" data-slug-hash="jzPpdP" data-default-tab="html,result" data-user="janeluck" data-embed-version="2" data-pen-title="z-index" class="codepen">See the Pen <a href="https://codepen.io/janeluck/pen/jzPpdP/">z-index</a> by janeluck (<a href="https://codepen.io/janeluck">@janeluck</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>



##### 参考链接：
+ [w3org](https://www.w3.org/TR/CSS21/zindex.html)
+ [层叠级别概述](http://w3help.org/zh-cn/kb/013/)


