---
title: 深入理解Promise
tags: JavaScript
---

Promise.resolve到底做了什么
reject后怎么处理
catch error
promise里面的resolve之后的代码执行???



promise流程中, resolve作为异步, 在语句块里面最后执行
```JavaScript
const p = new Promise(resolve => {
    resolve()
    console.log('Promise inter')
  //  resolve()
})

p.then(() => {
    console.log('then consoled')
})
```

```console
// Promise inter
// then consoled
```