---
title: 二分法实现repeat
date: 2018-02-28 22:28:17
tags:
- Algorithm
- JavaScript
---

```js
// ig: repeat("nodeJS", 2) -> nodeJSnodeJS

function repeat(target, n){
  var s = target, total = n;
  while (n > 0){
    if(n %2 == 1)
      total += s;
    if(n == 1)
      break;
    s += s;
    n = n >> 1;
  }
  return total;
}
```