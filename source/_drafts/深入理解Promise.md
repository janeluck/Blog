---
title: 深入理解Promise
tags: JavaScript
---

Promise.resolve到底做了什么
reject后怎么处理
catch error





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

但是比setTimeout的执行要优先, 因为setTimeout至少有4ms的延迟

```JavaScript

// setTimeout第二个参数没有指定 也至少有4ms的延迟, 所以先执行的resolve
// 没有想象中那么复杂, 抽丝剥茧下来都理的通

const log = console.log
const p = new Promise(resolve => {
    log(0)
    log('promise inter')

    setTimeout(()=>{
        log(2)
        log('before resolve')
        setTimeout(()=>{
            log(4)
        })
    })
    resolve()
    setTimeout(()=>{
        log(3)
        log('settimeout consoled')
        setTimeout(()=>{
            log(5)
        })
    })
})


p.then(() => {
   log(1)
   log('then consoled')
})

```


```console
// 0 1 2 3 4 5
```

