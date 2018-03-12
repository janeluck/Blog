---
title: height百分比计算规则
date: 2018-02-21 21:01:56
tags: Css
---

### 计算规则
`height`属性值为百分比时：
    + 基于当前元素的包含块高度;
    + 如果该包含块高度未指定且该元素的`position`不为`absolute`,height的值转换为`auto`
    + 根元素root element(通常为html元素)的height百分比基于初始包含块(initial containing block)[https://developer.mozilla.org/en-US/docs/Web/CSS/All_About_The_Containing_Block]


codepen: <p data-height="265" data-theme-id="0" data-slug-hash="oqXPGJ" data-default-tab="html,result" data-user="janeluck" data-embed-version="2" data-pen-title="height percentage" class="codepen">See the Pen <a href="https://codepen.io/janeluck/pen/oqXPGJ/">height percentage</a> by janeluck (<a href="https://codepen.io/janeluck">@janeluck</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>


### 参考链接

+ [height - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/height)
+ [visudet](https://www.w3.org/TR/CSS2/visudet.html)